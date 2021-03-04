import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import { Container, Popup, Description, Name, Link } from './Styles';

const Project = ({ project }) => {

  const [ showModal, setShowModal ] = useState(false);

  // Add overflow to body to prevent scrolling
  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body.classList.add("body");
    } else {
      body.classList.remove("body");
    }
  }, [showModal]);

  return (
    <Container className="project-thumb">
      {showModal ? <Modal image={project.img} hideModal={setShowModal.bind(null, false)} /> : null}
      <Popup onClick={setShowModal.bind(null, true)} className="image-popup">
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