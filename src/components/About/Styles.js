import styled from 'styled-components';

const Container = styled.div`
  background-color: #C26868;
  height: 1020px;
  margin-top: -22px;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Description = styled.p`
  text-align: center;
  padding-top: 60px;
  letter-spacing: 0.3em;
  color: #FAFAFA;
  font-family: 'Open Sans', 'sans-serif';
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -90px;
  visibility: hidden;
`;

export {
  Container,
  Inner,
  Description,
  Anchor,
};