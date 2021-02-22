import React from 'react';
import Code from '../Code/Code';
import { Container, Inner, Description } from './Styles';

const About = ({ tocRef }) => {

  return (
    <Container ref={el => tocRef.current[0] = el} id="about">
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