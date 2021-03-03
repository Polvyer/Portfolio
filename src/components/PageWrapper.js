import React from 'react';
import Header from './Header/Header';
import Illustration from './Illustration/Illustration';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';

const PageWrapper = ({ tocRef }) => {
  
  return (
    <div id="page-wrapper">
      <Header />
      <Illustration />
      <About tocRef={tocRef} />
      <Resume tocRef={tocRef} />
      <Projects />
    </div>
  );
};

export default PageWrapper;