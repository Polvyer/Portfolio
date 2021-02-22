import React from 'react';
import styled from 'styled-components';
import Answer from '../Answer/Answer';

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
      input: 'William.interests',
      output: '["Code", "Photography", "hiking", "gaming", "music"]',
    },
  ]

  return (
    <Container id="code">
      <Console id="console">
        {answers.map(answer => <Answer answer={answer} />)}
      </Console>
    </Container>
  );
};

export default Code;