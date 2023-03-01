export enum Color {
  BLACK = '#000',
  WHITE = '#FFFFFF',
  GREY_PRIMARY = '#e4e2e2',
  BACKGROUND = '#161B22',
  GREYSECONDARY =  '#2F2E41',  
}

export enum Fonts {
  NANUM = 'Nanum Myeongjo, serif',
  GLOOCK = 'Gloock, serif',
  NOTO = 'Noto Sans, sans-serif',
}

export type ThemeType = 'dark' | 'light';

export type FontType = string;

export interface Theme {
  light: {
    '--background': Color,
    '--fontColor': Color,
    '--greyPrimary': Color,
  },

  dark: {
    '--background': Color,
    '--fontColor': Color,
    '--greyPrimary': Color
  }
}

export interface Font {
  nanum: {
    '--fontFamily' : Fonts
  },

  gloock: {
    '--fontFamily' : Fonts
  },

  noto: {
    '--fontFamily' : Fonts
  }
}