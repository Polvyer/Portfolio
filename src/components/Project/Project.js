import React from 'react';
import { Container, Popup, Description, Name, Link } from './Styles';

const Project = ({ project }) => {
  return (
    <Container className="project-thumb">
      <Popup href="#" className="image-popup">
        <img src={project.img} alt="" />
      </Popup>
      <Description className="description">
        <Name>{project.name}</Name>
          {project.description}
          <Link target="_blank" href={project.github}>GitHub</Link>
          {project.demo ? <Link target="_blank" href={project.demo}>Demo</Link> : null}
      </Description>
    </Container>
  );
};

export default Project;