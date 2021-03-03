import React from 'react';
import styled from 'styled-components';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

const Container = styled.div`
  background-color: #DDD;
  height: auto;
  margin-top: -30px;
  padding-top: 60px;
  font-size: 1.1rem;
  line-height: 34px;
  font-family: 'Carla';
  overflow: hidden;
`;

const Inner = styled.div`
  width: 700px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Tagline = styled.p`
  text-align: center;
  font-family: 'Open Sans', 'sans-serif';
  letter-spacing: 0.3em;
  font-weight: 700;
  padding-bottom: 50px;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;
`;

const Resume = ({ tocRef }) => {
  return (
    <Container id="resume">
      <Anchor className="anchor" ref={el => tocRef.current[1] = el}></Anchor>
      <Inner className="inner">
        <Tagline className="tagline">Résumé</Tagline>
        <Education />
        <Experience />
        <br />
      </Inner>
    </Container>
  );
};

export default Resume;