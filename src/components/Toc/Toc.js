import React from 'react';
import { Container, List, Link } from './Styles';

const Toc = ({ tocRef, showDropdown }) => {

  const tocs = ['About', 'Résumé', 'Projects'];

  const handleOnClick = (ref, index) => {
    if (ref.current[index]) {
      ref.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container style={ showDropdown ? {"top": "30px"} : {"top": "-310px"}} className={showDropdown ? "notoggle show" : "notoggle noshow"}>
      {tocs.map((toc, index) => {
        return (
          <List key={index}>
            <Link className="notoggle" onClick={handleOnClick.bind(null, tocRef, index)}>{toc}</Link>
          </List>
        );
      })}
    </Container>
  );
};

export default Toc;