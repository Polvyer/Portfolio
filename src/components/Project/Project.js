import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  margin: 20px;
  width: 90%;
  flex-basis: 800px;
`;

const Popup = styled.a`
  text-decoration: none;

  img {
    width: 100%;
  }
`;

const Project = ({ project }) => {
  return (
    <Container className="project-thumb">
      <Popup href="#" className="image-popup">
        <img src={project.img} alt="" />
      </Popup>
      <p className="description">
        <b>{project.name} </b>
        {project.description}
      </p>
    </Container>
  );
};

export default Project;