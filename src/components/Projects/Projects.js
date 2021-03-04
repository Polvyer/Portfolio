import React from 'react';
import Project from '../Project/Project';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #EEE;
  height: auto;
  text-align: center;
  padding: 60px 0;
  font-size: 1.1rem;
  line-height: 40px;
  font-family: "Carla"
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Tagline = styled.p`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.3em;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    padding-bottom: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const listOfProjects = [
  {
    img: "https://camo.githubusercontent.com/4b70ffd1198df9770be83d289abc87e78b99ffc6b165f15f702074615206114f/68747470733a2f2f692e696d6775722e636f6d2f755453593856692e706e67",
    github: "https://github.com/Polvyer/Spot-A-Song",
    name: "Spot-A-Song",
    description: "An intelligent algorithm that enables users to create awesome playlists based on a song.",
  },
  {
    img: "https://i.imgur.com/GNSXlKa.png",
    github: "https://github.com/Polvyer/Re-Art",
    name: "Re:Art",
    description: "A social media platform for visual artists who wish to improve their art.",
  }
]

const Projects = ({ tocRef }) => {

  return (
    <Container>
      <Anchor className="anchor" ref={el => tocRef.current[2] = el}> </Anchor>
      <Inner className="inner">
        <Tagline id="projects">Projects</Tagline>
        <Section>
          {listOfProjects.map(project => <Project project={project} />)}
        </Section>
      </Inner>
    </Container>
  );
};

export default Projects;