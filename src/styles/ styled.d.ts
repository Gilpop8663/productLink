import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    orangeColor: string;
    pinkColor: string;
    bigRadius: string;
    miniRadius: string;
    textLightGrayColor: string;
    textDarkGrayColor: string;
    textBlackColor: string;
    textRedColor: string;
    bigFontSize: string;
    normalFontSize: string;
    smallFontSize: string;
    font: string;
  }
}
