import React from 'react';
import UIC from '../../images/uic.png';
import Coursework from '../Coursework/Coursework';
import Skills from '../Skills/Skills';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import { SectionTagline, Relevant } from './Styles';

const Education = () => {

  const skills = [
    'C', 'C++', 'Java', 'Python', 'SQL', 'Git', 'JavaFX',
    'JavaScript', 'F#', 'Android Studio', 'Unity', 'C#', 'ASP.NET'
  ];

  return (
    <>
      <SectionTagline className="section-tagline">Education</SectionTagline>
      <p>
        <ResumeHeader 
          title="Computer Science, B.S." 
          place="Chicago, IL" 
          timeframe="2018 - 2020" 
          location="University of Illinois At Chicago" 
          img={UIC} />
        <br />
        <br />
        <Relevant>Relevant Coursework:</Relevant>
      </p>
      <Coursework />
      <Skills skills={skills} />
      <br />
      <br />
    </>
  );
};

export default Education;