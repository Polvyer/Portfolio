import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  color: #CCC;
`;

const Link = styled.a`
  color: #3A92C8;
  text-decoration: none;
`;

const Answer = ({ answer }) => {

  const renderContent = () => {

    if (answer.link) {
      return (
        <>
          &nbsp;&nbsp;{`=> `}
          {answer.output.length > 1 ? '[' : null}
          {answer.output.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                "<Link rel="noopener noreferrer" href={answer.link[index]} target={answer.email ? null : "_blank"}>{elem}</Link>"{index === (answer.output.length - 1) ? null : ', '}
              </React.Fragment>
            );
          })}
          {answer.output.length > 1 ? ']' : null}
          <br />
          <br />
        </>
      );
    }

    return (
      <>
        &nbsp;&nbsp;{`=> ${answer.output}`}
        {answer.work && answer.work.map((elem, index) => {
          return (
            <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{elem}</div>
          );
        })}
        {answer.work ? null : <br />}
        <br />
      </>
    );
  };

  return (
    <>
      {`> ${answer.input}`}
      <br />
      <Container className="answer">
        {renderContent()}
      </Container>
    </>
  );
};

export default Answer;