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
    { name: 'Roboto', styles: ['400', '700'] },
    { name: 'Cantarell', styles: ['400', '700'] },
    { name: 'Comfortaa', styles: ['400', '700'] },
    { name: 'Josefin Slab', styles: ['400', '700'] },
    { name: 'Maven Pro', styles: ['400', '700'] },
    { name: 'Markazi Text', styles: ['400', '600'] },
    { name: 'Playfair Display', styles: ['400', '600'] },
    { name: 'Glegoo', styles: ['400', '600'] },
    { name: 'Fjalla One', styles: ['400', '600'] },
    { name: 'Karla', styles: ['400', '600'] },
    { name: 'IBM Plex Sans Condensed', styles: ['400', '600'] },
    { name: 'Unna', styles: ['200', '400', '600'] },
    { name: 'Maitree', styles: ['200', '400', '600'] },
    { name: 'Petrona', styles: ['200', '400', '600'] }
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
        marginBottom: 0,
        textTransform: 'uppercase'
      },

      'a': {
        color: theme.brand('link'),
        textDecoration: 'none'
      },

      '.headroom': {
        backgroundColor: 'rgba(255, 255, 255, .9)',
        width: '100%'
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
