import React from 'react';
import UIC from '../../images/uic.png';
import Coursework from '../Coursework/Coursework';
import Skills from '../Skills/Skills';
import { SectionTagline, ImageContainer, Image, University, 
         Right, Relevant } from './Styles';

const Education = () => {

  const skills = [
    'C', 'C++', 'Java', 'Python', 'SQL', 'Git', 'JavaFX',
    'JavaScript', 'F#', 'Android Studio', 'Unity', 'C#'
  ];

  return (
    <>
      <SectionTagline className="section-tagline">Education</SectionTagline>
      <p>
        <ImageContainer rel="noopener noreferrer"  target="_blank" href="https://www.uic.edu">
          <Image className="icon" src={UIC} alt="UIC" />
        </ImageContainer>
        <University>University of Illinois At Chicago</University>
        <Right className="right">
          <i>2018 - 2020</i>
        </Right>
        <br />
        <University>Computer Science, B.S.</University>
        <Right className="right">
          <i>Chicago, IL</i>
        </Right>
        <br />
        <br />
        <Relevant>Relevant Coursework:</Relevant>
      </p>
      <Coursework />
      <Skills skills={skills} />
      <p></p>
      <br />
    </>
  );
};

export default Education;