import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import theme from './ds'

const options = {
  baseFontSize: theme.get('type.baseFontSize'),
  baseLineHeight: theme.get('type.baseLineHeight'),
  bodyColor: theme.brand('text'),
  bodyFontFamily: theme.get('fontFamily.body').split(','),
  headerColor: theme.brand('heading'),
  headerFontFamily: theme.get('fontFamily.heading').split(','),
  scaleRatio: theme.get('modularScale.ratio'),

  headerWeight: '700',
  bodyWeight: '400',

  googleFonts: [
    { name: 'Bokor', styles: ['400'] },
    { name: 'Lora', styles: ['400', '700'] },
    { name: 'Podkova', styles: ['400', '700'] },
    { name: 'Roboto', styles: ['400', '700'] }
  ],

  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'html': {
        background: theme.brand('background'),
        height: '100%'
      },

      'body': {
        margin: 0,
        minHeight: '100%'
      },

      '#___gatsby': {
        position: 'relative',
        minHeight: '100vh'
      },

      'img': {
        maxWidth: '100%',
        height: 'auto'
      },

      'input#toggle:checked ~ ul': {
        maxHeight: '18rem',
        transition: 'max-height .5s cubic-bezier(.4, 0, 1, 1)'
      },

      'h1, h2, h3, h4, h5, h6': {
        lineHeight: theme.get('type.headingLineHeight'),
        marginBottom: 0
      },

      'a': {
        color: theme.brand('link'),
        textDecoration: 'none'
      },

      'a:hover': {
        textDecoration: 'underline',
        textDecorationStyle: 'wavy'
      },

      '[rel=category]': {
        color: theme.brand('link'),
        textDecoration: 'underline'
      },

      '[rel=category]:hover': {
        textDecoration: 'none'
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
