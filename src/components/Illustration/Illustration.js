import React from 'react';
import styled from 'styled-components';
import Big from '../../images/big.png';

const Container = styled.div`
  background-color: #4C5364;
  width: 100%;
  padding-bottom: 50px;
  text-align: right;
`;

const Image = styled.img`
  padding-top: 150px;
  width: 50%;
  min-width: 800px;
`;

const Illustration = () => {

  return (
    <Container id="illustration">
      <center className="center">
        <Image src={Big} alt="Big" />
      </center>
    </Container>
  );
};

export default Illustration;