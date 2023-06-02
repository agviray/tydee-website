import { createGlobalStyle } from 'styled-components';
import SourceSansProBoldTtf from '../../fonts/source_sans_pro_ff/SourceSansPro-Bold.ttf';
import SourceSansProBlackTtf from '../../fonts/source_sans_pro_ff/SourceSansPro-Black.ttf';
import AvenirLightTtf from '../../fonts/avenir_ff/Avenir-Light.ttf';
import AvenirHeavyTtf from '../../fonts/avenir_ff/Avenir-Heavy.ttf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Source Sans Pro Bold";
    src: url(${SourceSansProBoldTtf});
  }

  @font-face {
    font-family: "Source Sans Pro Black";
    src: url(${SourceSansProBlackTtf});
  }

  @font-face {
    font-family: "Avenir Light";
    src: url(${AvenirLightTtf});
  }

  @font-face {
    font-family: "Avenir Heavy";
    src: url(${AvenirHeavyTtf});
  }
`;

export default GlobalFonts;
