import { createGlobalStyle } from 'styled-components'

import Karla from './Karla/static/Karla-Bold.ttf';
import Montserrat from './Montserrat/Montserrat-Regular.ttf';
import OpenSans from './Open_Sans/OpenSans-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Karla';
    src: local('Karla'), url(${Karla}) format('ttf');
  }

  @font-face {
    font-family: 'Mont';
    src: url(${Montserrat});
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans});
  }
`;