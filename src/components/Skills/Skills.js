import React from 'react';
import { Skill } from './Styles';

const Skills = ({ skills }) => {

  return (
    <>
      {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
    </>
  );
};

export default Skills;