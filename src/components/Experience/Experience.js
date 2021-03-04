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
        <Relevant> Wrote a Python script to organize Blackboard submissions which saved 3 hours per week in manual time. 
        Designed, tested, and graded quiz problems for midterms and final exam.
        Taught effective coding principles by introducing proper planning and debugging methods.
        Held weekly office hours to help students with programming problem sets and technical concepts.</Relevant>
      </p>
      <br />
      <Skills skills={skills} />
      <br />
      <br />
    </>
  );
};

export default Experience;