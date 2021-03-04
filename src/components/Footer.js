import React from 'react';
import styled from 'styled-components';
import GitHub from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';

const Container = styled.footer`

  width: 100%;
  padding: 20px 0 15px 0;
  background-color: #fafafa;
  line-height: 10px;

  .socials {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .creator {
    font-size: 0.8rem;
    color: #b1b1b1;
  }

  .profiles {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links {
    cursor: pointer;
    margin-left: 15px;
    width: 1.8em;
  }
`;

const openInNewTab = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};

const Footer = () => {
  return (
    <Container>
      <div className="socials">
        <span className="creator">© 2021 William Ocampo.</span>
        <div className="profiles">
          <img onClick={openInNewTab.bind(null, "https://github.com/Polvyer")} className="links" src={GitHub} alt="GitHub" />
          <img onClick={openInNewTab.bind(null, "https://www.linkedin.com/in/wocampo")} className="links" src={LinkedIn} alt="LinkedIn" />
        </div>
      </div>
    </Container>
  )
}

export default Footer;