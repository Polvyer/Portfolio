import React from 'react';
import { Skill } from './Styles';

const Skills = ({ skills }) => {

  return (
    <p style={{"marginBottom": "19px"}}>
      {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
    </p>
  );
};

export default Skills;