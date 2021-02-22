import styled from 'styled-components';

const SectionTagline = styled.p`
  font-family: 'Open Sans', 'sans-serif';
  letter-spacing: 0.3em;
  font-weight: 700;
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #CEC8C8;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const ImageContainer = styled.a`
  text-decoration: none;
  color: #333;
`;

const Image = styled.img`
  width: 65px;
  height: 65px;
  float: left;
  display: block;
  margin-left: -95px;
  margin-top: 5px;
  background-color: #FFF;
  opacity: 0.8;
  z-index: 0;
  border-radius: 50%;
  filter: grayscale(100%);
  transition: all .4s ease;
`;

const University = styled.b`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Right = styled.span`
  float: right;

  i {
    font-size: 1.2rem;
  }
`;

const Relevant = styled.span`
  font-size: 1.2rem;
`;

export {
  SectionTagline,
  ImageContainer,
  Image,
  University,
  Right,
  Relevant,
};