import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const options = {
  baseFontSize: '16px',
  baseLineHeight: 1.3,
  blockMarginBottom: 1,
  scaleRatio: 1.8,

  headerColor: '#222',
  bodyColor: '#222',

  headerFontFamily: ['Libre Baskerville', 'serif'],
  bodyFontFamily: ['Lora', 'serif'],

  googleFonts: [
    { name: 'Libre Baskerville', styles: ['400', '700'] },
    { name: 'Lora', styles: ['400', '700'] },
    { name: 'Roboto', styles: ['200', '300'] }
  ],

  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'h1, h2, h3, h4, h5, h6': {
        lineHeight: 1.8,
        marginBottom: 0
      },

      'a': {
        color: '#222',
        textDecoration: 'none'
      },

      'a:hover': {
        textDecoration: 'underline'
      },

      '[rel=category]': {
        color: 'pink',
        textDecoration: 'underline'
      },

      '[rel=category]:hover': {
        textDecoration: 'none'
      },

      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${17 / 16 * 100}%`
        }
      },

      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${16 / 16 * 100}%`
        }
      }
    }
  }
}

const typography = new Typography(options)

typography.plugins = new CodePlugin()

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography