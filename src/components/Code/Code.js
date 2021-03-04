import React from 'react';
import Answer from '../Answer/Answer';
import { Container, Console } from './Styles';

const Code = () => {

  const answers = [
    {
      input: 'William.origin',
      output: '"Chicago, IL"',
    },
    {
      input: 'William.education',
      output: '"University of Illinois at Chicago"',
    },
    {
      input: 'William.major',
      output: '"Computer Science"',
    },
    {
      input: 'William.graduated',
      output: '"true"',
    },
    {
      input: 'William.interests',
      output: '["Code", "Photography", "volunteering", "hiking", "gaming", "music"]',
    },
    {
      input: 'William.workExperience.latest',
      output: 'Latest Work Experience',
      work: ['company: "University of Illinois at Chicago"', 'role: "Teaching Assisant"', 'startDate: "August 2020"', 'endDate: "December 2020"'],
    },
    {
      input: 'William.resume',
      output: ['williamocampo.pdf'],
      link: ["https://www.dropbox.com/s/gu6g24g8phvqgk9/William_Ocampo_Resume.pdf?dl=0"],
    },
    {
      input: 'William.profiles',
      output: ['github.com/Polvyer', 'linkedin.com/in/wocampo'],
      link: ["https://github.com/Polvyer", "https://www.linkedin.com/in/wocampo"],
    },
    {
      input: 'William.email',
      output: ['wocampo111@gmail.com'],
      link: ["mailto:wocampo111@gmail.com"],
      email: true,
    },
  ];

  return (
    <Container id="code">
      <Console id="console">
        {answers.map((answer, index) => <Answer key={index} answer={answer} />)}
      </Console>
    </Container>
  );
};

export default Code;