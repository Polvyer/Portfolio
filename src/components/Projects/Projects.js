import React from 'react';
import Project from '../Project/Project';
import { Container, Anchor, Inner, Tagline, Section } from './Styles';

const listOfProjects = [
  {
    img: "https://camo.githubusercontent.com/4b70ffd1198df9770be83d289abc87e78b99ffc6b165f15f702074615206114f/68747470733a2f2f692e696d6775722e636f6d2f755453593856692e706e67",
    github: "https://github.com/Polvyer/Spot-A-Song",
    demo: "https://spot-a-song.com",
    name: "Spot-A-Song",
    description: "An intelligent algorithm that enables users to create awesome playlists based on a song.",
  },
  {
    img: "https://i.imgur.com/GNSXlKa.png",
    github: "https://github.com/Polvyer/Re-Art",
    demo: "https://floating-hamlet-42717.herokuapp.com/",
    name: "Re:Art",
    description: "A social media platform for visual artists who wish to improve their art.",
  },
  {
    img: "https://www.evl.uic.edu/cs426/finals/2020-Spring/Images/TrustMe.png",
    github: "https://github.com/Polvyer/Trust-me",
    demo: "https://github.com/Polvyer/Trust-me/releases/tag/Public_Demo",
    name: "Trust me",
    description: "A 3D puzzle game focused on exploring lucid dreaming.",
  },
  {
    img: "https://i.imgur.com/NjnycFi.png",
    github: "https://github.com/Polvyer/Chicago-Sense",
    demo: "https://chicago-sense.web.app/",
    name: "Chicago Sense",
    description: "An app where YOU let real Chicagoans help you get the best experience of Chicago.",
  },
  {
    img: "https://i.imgur.com/9tOuo0m.png",
    github: "https://github.com/Polvyer/TicTacToe",
    name: "Tic-tac-toe",
    description: "Variation of classic Tic-tac-toe.",
  },
  {
    img: "https://i.imgur.com/ppSlbQ8.png",
    github: "https://github.com/Polvyer/Weather-App",
    demo: "https://polvyer.github.io/Weather-App/",
    name: "Weather App",
    description: "A weather forecast site.",
  },
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