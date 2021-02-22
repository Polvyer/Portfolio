import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  right: 0;
  text-align: right;
  z-index: 3000;
  line-height: 20px;
`;

const TocLink = styled.a`
  color: #CCC;
  position: relative;
  display: block;
  z-index: 1000;
  min-width: 200px;
  line-height: 40px;
  height: 40px;
  padding-right: 30px;
  padding-top: 24px;
  width: 100%;
  background-color: #FAFAFA;
  text-decoration: none;
`;

const Bar = styled.span`
  font-size: 1.9rem;
  margin-right: 70px;
  display: inline-block;
  transition: transform .4s ease;
  font-family: 'Carla', 'sans-serif';
`;

const Toc = styled.ul`
  position: absolute;
  z-index: 10;
  text-align: center;
  opacity: 0.5;
  right: 0px;
  background-color: #FAFAFA;
  width: auto;
  padding-top: 60px;
`;

const List = styled.li`
  list-style: none;
  margin: 50px;
  padding: 0;
  width: auto;
`;

const Link = styled.a`
  color: #333;
  padding: 5px 20px 5px 30px;
  display: block;
  font-family: 'Mont';
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.9rem;
`;

const TocHolder = ({ tocRef }) => {

  const tocs = [
    { txt: 'About', ref: tocRef.current[0] },
    { txt: 'Résumé', ref: tocRef.current[1] },
    { txt: 'Projects', ref: tocRef.current[1] },
  ];

  const handleOnClick = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Container id="toc-holder">
      <TocLink href="#" className="toc-link" id="toc-link">
        <Bar>☰</Bar>
      </TocLink>
      <Toc>
        {tocs.map((toc, index) => {
          return (
            <List key={index}>
              <Link onClick={handleOnClick.bind(null, toc.ref)}>{toc.txt}</Link>
            </List>
          );
        })}
      </Toc>
    </Container>
  );
}

export default TocHolder;