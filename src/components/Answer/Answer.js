import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  color: #CCC;
`;

const Answer = ({ answer }) => {
  return (
    <>
      {`> ${answer.input}`}
      <br />
      <Container className="answer">
        &nbsp;&nbsp;{`=> ${answer.output}`}
        <br />
        <br />
      </Container>
    </>
  );
};

export default Answer;