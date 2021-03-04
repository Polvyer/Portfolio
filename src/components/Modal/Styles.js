import styled from 'styled-components';

const Container = styled.div`
  cursor: zoom-out;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.7);
`;

const Section = styled.div`
  background-color: #fafafa;
  width: fit-content;
  padding: 10px 20px 10px 20px;
  height: fit-content;
  margin: 0 auto;
`;

const Content = styled.img`
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 700px;
  animation-name: zoom;
  animation-duration: 0.5s;

  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }
`;

export {
  Container,
  Section,
  Content,
};