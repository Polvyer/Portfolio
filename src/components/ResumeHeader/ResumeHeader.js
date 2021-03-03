import React from 'react';
import { ImageContainer, Image, University, Right } from './Styles';

const ResumeHeader = ({ img, place, location, title, timeframe }) => {
  return (
    <>
      <ImageContainer rel="noopener noreferrer"  target="_blank" href="https://www.uic.edu">
          <Image className="icon" src={img} alt="UIC" />
        </ImageContainer>
        <University>{location}</University>
        <Right className="right">
          <i>{timeframe}</i>
        </Right>
        <br />
        <University>{title}</University>
        <Right className="right">
          <i>{place}</i>
        </Right>
    </>
  );
};

export default ResumeHeader;