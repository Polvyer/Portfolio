import React from 'react';
import GlobalFonts from './fonts/fonts';
import PageWrapper from './components/PageWrapper';

const App = () => {
  return (
    <div>
      <GlobalFonts />
      <div id="toc-holder"></div>
      <PageWrapper />
      <div id="footer"></div>
    </div>
  );
};

export default App;
