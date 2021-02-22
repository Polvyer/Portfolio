import React from 'react';
import { Container, Name } from './Styles';

const Header = () => {
  
  return (
    <Container id="header">
      <div className="inner name">
        <Name href="#illustration">William Ocampo</Name>
      </div>
    </Container>
  );
};

export default Header;
