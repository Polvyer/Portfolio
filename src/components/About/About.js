import React from 'react';
import Code from '../Code/Code';
import { Container, Inner, Description, Anchor } from './Styles';

const About = ({ tocRef }) => {

  return (
    <Container id="about">
      <Anchor className="anchor" ref={el => tocRef.current[0] = el}></Anchor>
      <Inner className="inner">
        <Description>Hello, world! I'm a Software Engineer.</Description>
        <br />
        <br />
        <br />
        <Code />
      </Inner>
    </Container>
  );
};

export default About;