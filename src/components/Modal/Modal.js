import React from 'react';
import { Container, Section, Content } from './Styles';

const Modal = ({ image, hideModal }) => {
  
  return (
    <Container onClick={hideModal}>
      <Section>
        <Content src={image} />
      </Section>
    </Container>
  );
};

export default Modal;