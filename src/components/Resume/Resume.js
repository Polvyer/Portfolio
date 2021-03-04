import React from 'react';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import { Container, Inner, Tagline, Anchor } from './Styles';

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