import React from 'react';
import styled from 'styled-components';
import Code from '../Code/Code';

const Container = styled.div`
  background-color: #C26868;
  height: 1020px;
  margin-top: -22px;
`;

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Description = styled.p`
  text-align: center;
  padding-top: 60px;
  letter-spacing: 0.3em;
  color: #FAFAFA;
  font-family: 'Open Sans', 'sans-serif';
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const About = () => {

  return (
    <Container id="about">
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