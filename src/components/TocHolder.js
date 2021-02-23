import React, { useState, useEffect, useRef } from 'react';
import Toc from './Toc/Toc';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  right: 0;
  text-align: right;
  z-index: 3000;
  line-height: 20px;
  width: 250px;
`;

const TocLink = styled.a`
  color: #CCC;
  position: relative;
  display: block;
  z-index: 1000;
  min-width: 200px;
  line-height: 40px;
  height: auto;
  padding-top: 24px;
  width: 100%;
  background-color: #FAFAFA;
  text-decoration: none;
  cursor: pointer;

  .rotate {
    transform: rotate(180deg);
  }
`;

const Bar = styled.span`
  font-size: 1.9rem;
  margin-right: 70px;
  display: inline-block;
  transition: transform .4s ease;
  font-family: 'Carla', 'sans-serif';
  color: #CCC;
`;

const TocHolder = ({ tocRef }) => {

  const containerRef = useRef();

  const [ showDropdown, setShowDropdown ] = useState(false);

  useEffect(() => {

    const mouseOut = () => {
      setShowDropdown(false);
    }

    let node;
    if (containerRef.current) {
      node = containerRef.current;
      node.addEventListener('mouseleave', mouseOut);

      return () => {
        node.removeEventListener('mouseleave', mouseOut);
      }
    }
  }, [setShowDropdown]);

  const handleToggle = (e) => {
    if (!e.target.className.includes('notoggle')) {
      setShowDropdown(!showDropdown);
    }
  }

  return (
    <Container ref={containerRef} id="toc-holder">
      <TocLink onClick={handleToggle.bind(null)} className="toc-link" id="toc-link">
        <Bar className={showDropdown ? "rotate" : ''}>☰</Bar>
      </TocLink>
      <Toc tocRef={tocRef} showDropdown={showDropdown} />
    </Container>
  );
}

export default TocHolder;