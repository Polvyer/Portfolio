import React from 'react';
import Big from '../../images/big.png';
import { Container, Image } from './Styles';

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