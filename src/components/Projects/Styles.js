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

export {
  Container,
  Anchor,
  Inner,
  Tagline,
  Section,
};