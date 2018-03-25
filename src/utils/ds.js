import DesignSystem from 'design-system-utils'
import * as colors from './colors'
import * as zIndex from './zindex'

const {
  antipink,
  aquamarine,
  black,
  contrastpink,
  cyan,
  darkgray,
  darkpink,
  lightpink,
  mediumturquoise,
  mistyrose,
  pink,
  turquoise,
  white
} = colors

export const ds = {
  colors: {
    colorPalette: colors,
    brand: {
      logo: black,
      background: white,
      contrastBackground: pink,
      heading: darkgray,
      contrastHeading: white,
      text: darkgray,
      contrastText: black,
      border: darkgray,
      contrastBorder: mistyrose,
      link: darkgray,
      contrastLink: white
    }
  },
  fontFamily: {
    heading: 'Podkova, serif',
    body: 'Lora, serif',
    serif: 'Bokor, serif',
    sans: 'Arial, sans-serif'
  },
  modularScale: {
    base: 16,
    ratio: 2
  },
  type: {
    baseFontSize: '16px',
    baseLineHeight: 1.3,
    headingFontSize: '18px',
    headingLineHeight: 1.8
  },
  zIndex
}

function DS (config) {
  return new DesignSystem(config, {
    useModularScale: true,
    fontSizeUnit: 'rem'
  })
}

export default DS(ds)
