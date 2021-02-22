import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'Mont', 'sans-serif';
  background-color: #FAFAFA;
  line-height: 100px;
  z-index: 1000;
  font-size: 0.9rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const Name = styled.a`
  text-decoration: none;
  color: #333;
`;

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
