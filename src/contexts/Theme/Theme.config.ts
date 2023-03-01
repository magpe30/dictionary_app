import { ThemeType, Theme, Color, Fonts, FontType, Font } from './Theme.model';

export const THEMES:Record<string, any> = {
    light: {
        '--background': Color.WHITE,
        '--fontColor': Color.BLACK,
        '--greyPrimary': Color.GREY_PRIMARY,
    },

    dark: {
        '--background': Color.BACKGROUND,
        '--fontColor': Color.WHITE,
        '--greyPrimary': Color.GREYSECONDARY,
    }
}

export const FONTS: Record<string, any> = {
    nanum: {
        '--fontFamily' : Fonts.NANUM
    },

    gloock: {
        '--fontFamily' : Fonts.GLOOCK
    },

    noto: {
        '--fontFamily' : Fonts.NOTO
    }
}