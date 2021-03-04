import React, { useRef } from 'react';
import GlobalFonts from './fonts/fonts';
import TocHolder from './components/TocHolder';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';

const App = () => {

  const tocRef = useRef([]);

  return (
    <div>
      <GlobalFonts />
      <TocHolder tocRef={tocRef} />
      <PageWrapper tocRef={tocRef} />
      <Footer />
    </div>
  );
};

export default App;
