import DesignSystem from 'design-system-utils'
import * as colors from './colors'
import * as zIndex from './zindex'

const {
  // antipink,
  // aquamarine,
  black,
  // contrastpink,
  // cyan,
  darkgray,
  // darkpink,
  // lightpink,
  // mediumturquoise,
  // mistyrose,
  // pink,
  // turquoise,
  white,
  green
} = colors

export const ds = {
  colors: {
    colorPalette: colors,
    brand: {
      logo: black,
      background: white,
      contrastBackground: '#eee',
      heading: darkgray,
      contrastHeading: darkgray,
      text: darkgray,
      contrastText: darkgray,
      border: darkgray,
      contrastBorder: darkgray,
      link: darkgray,
      contrastLink: darkgray
    }
  },
  // { name: 'Bokor', styles: ['400'] },
  // { name: 'Lora', styles: ['400', '700'] },
  // { name: 'Podkova', styles: ['400', '700'] },
  // { name: 'Roboto', styles: ['400', '700'] },
  // { name: 'Cantarell', styles: ['400', '700'] },
  // { name: 'Comfortaa', styles: ['400', '700'] },
  // { name: 'Josefin Slab', styles: ['400', '700'] },
  // { name: 'Maven Pro', styles: ['400', '700'] },
  // { name: 'Markazi Text', styles: ['400', '600'] },
  // { name: 'Playfair Display', styles: ['400', '600'] },
  // { name: 'Glegoo', styles: ['400', '600'] },
  // { name: 'Fjalla One', styles: ['400', '600'] },
  // { name: 'Karla', styles: ['400', '600'] },
  // { name: 'IBM Plex Sans Condensed', styles: ['400', '600'] },
  // { name: 'Unna', styles: ['200', '400', '600'] },
  // { name: 'Maitree', styles: ['200', '400', '600'] },
  // { name: 'Petrona', styles: ['200', '400', '600'] }
  fontFamily: {
    heading: 'Karla',
    body: 'Karla',
    serif: 'Petrona',
    sans: 'Karla',
    focus: 'Karla',
    paragraph: 'Petrona',
    footnote: 'Karla',
    footer: {
      title: 'Karla',
      body: 'Karla'
    }
  },
  modularScale: {
    base: 16,
    ratio: 2
  },
  type: {
    baseFontSize: '16px',
    baseLineHeight: 1.3,
    headingFontSize: '18px',
    headingLineHeight: 1.3
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
