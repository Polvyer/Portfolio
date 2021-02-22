import React, { useRef } from 'react';
import GlobalFonts from './fonts/fonts';
import TocHolder from './components/TocHolder';
import PageWrapper from './components/PageWrapper';

const App = () => {

  const tocRef = useRef([]);

  return (
    <div>
      <GlobalFonts />
      <TocHolder tocRef={tocRef} />
      <PageWrapper tocRef={tocRef} />
      <div id="footer"></div>
    </div>
  );
};

export default App;
