import { css } from "styled-components";

import OswaldBold from "../fonts/Oswald/Oswald-Bold.ttf";
import OswaldExtraLigh from "../fonts/Oswald/Oswald-ExtraLight.ttf";
import OswaldLight from "../fonts/Oswald/Oswald-Light.ttf";
import OswaldMedium from "../fonts/Oswald/Oswald-Medium.ttf";
import OswaldRegular from "../fonts/Oswald/Oswald-Regular.ttf";
import OswaldSemiBold from "../fonts/Oswald/Oswald-SemiBold.ttf";

import HelveticaNueBold from "../fonts/Helvetica/HelveticaNeuBold.ttf";
import HelveticaNueMedium from '../fonts/Helvetica/HelveticaNeueMedium.ttf'

const OswaldNormalWeights = {
  200: OswaldExtraLigh,
  300: OswaldLight,
  400: OswaldRegular,
  500: OswaldMedium,
  600: OswaldSemiBold,
  700: OswaldBold,
};

const createFontFaces = (family, style = "normal") => {
  let styles = "";

  for (const [weight, formats] of Object.entries(family[style])) {
    const ttf = formats[0];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${ttf}) format('ttf');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const Fonts = css`
  @font-face {
    font-family: "Helvetica Nue Bold";
    src: url(${HelveticaNueBold}) format("ttf");
  }
  @font-face {
    font-family: "Helvetica Nue Medium";
    src: url(${HelveticaNueMedium}) format("ttf");
  }
`;

export default Fonts;
