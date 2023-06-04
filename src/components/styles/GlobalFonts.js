import { createGlobalStyle } from 'styled-components';
import SourceSansProBoldTtf from '../../fonts/source_sans_pro_ff/SourceSansPro-Bold.ttf';
import SourceSansProBlackTtf from '../../fonts/source_sans_pro_ff/SourceSansPro-Black.ttf';
import AvenirLightTtf from '../../fonts/avenir_ff/Avenir-Light.ttf';
import AvenirHeavyTtf from '../../fonts/avenir_ff/Avenir-Heavy.ttf';
import MontserratExtraBold from '../../fonts/montserrat_ff/Montserrat-ExtraBold.ttf';

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
  
  @font-face {
    font-family: "Montserrat Extra Bold";
    src: url(${MontserratExtraBold});
  }
`;

export default GlobalFonts;
