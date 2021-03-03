import React from 'react';
import UIC from '../../images/uic.png';
import Skills from '../Skills/Skills';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import { SectionTagline, Relevant } from './Styles';

const Experience = () => {

  const skills = [
    'C++', 'Python', 'SQL', 'F#', 'C#', 'ASP.NET'
  ];

  return (
    <>
      <SectionTagline className="section-tagline">Experience</SectionTagline>
      <p>
        <ResumeHeader 
          title="Teaching Assistant" 
          place="Chicago, IL" 
          timeframe="Fall 2020" 
          location="University of Illinois At Chicago" 
          img={UIC} />
        <br />
        <br />
        <Relevant>Joined a team of product and software engineers within IDEO to design, prototype, build and ship digital products. Worked as both a designer and developer on a variety of internal and client projects.</Relevant>
      </p>
      <br />
      <Skills skills={skills} />
      <br />
      <br />
    </>
  );
};

export default Experience;