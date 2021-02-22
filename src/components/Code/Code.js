import React from 'react';
import styled from 'styled-components';
import Answer from '../Answer/Answer';
import Resume from '../../documents/williamocampo.pdf';

const Container = styled.div`
  border-radius: 5px;
  width: 750px;
  margin: 0 auto;
  padding-top: 15px;
  background-color: #CCC;
  height: 700px;
  font-family: 'Monaco', 'Courier New';
  text-align: left;
  font-size: 0.75rem;
  color: #FAFAFA;
`;

const Console = styled.div`
  width: 100%;
  padding: 40px;
  height: 100%;
  margin: 0 auto;
  background-color: #383737;
`;

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
      output: '["Code", "Photography", "hiking", "gaming", "music"]',
    },
    {
      input: 'William.workExperience.latest',
      output: 'Latest Work Experience',
      work: ['company: "University of Illinois at Chicago"', 'role: "Teaching Assisant"', 'startDate: "August 2020"', 'endDate: "December 2020"']
    },
    {
      input: 'William.resume',
      output: ['williamocampo.pdf'],
      link: [Resume],
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
  ]

  return (
    <Container id="code">
      <Console id="console">
        {answers.map((answer, index) => <Answer key={index} answer={answer} />)}
      </Console>
    </Container>
  );
};

export default Code;