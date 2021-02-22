import React from 'react';
import Header from './Header/Header';
import Illustration from './Illustration/Illustration';
import About from './About/About';

const PageWrapper = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <Illustration />
      <About />
    </div>
  );
};

export default PageWrapper;