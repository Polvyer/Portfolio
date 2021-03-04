import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  margin: 20px;
  width: 90%;
  flex-basis: 500px;
`;

const Popup = styled.a`
  text-decoration: none;

  img {
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  padding: 10px 25px 25px 25px;
  text-align: left;
  line-height: 24px;
`;

const Name = styled.b`
  margin-right: 5px;
`;

const Project = ({ project }) => {
  return (
    <Container className="project-thumb">
      <Popup href="#" className="image-popup">
        <img src={project.img} alt="" />
      </Popup>
      <Description className="description">
        <Name>{project.name}</Name>
        {project.description}
      </Description>
    </Container>
  );
};

export default Project;