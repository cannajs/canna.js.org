import * as React from 'react'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

let stylesStr

if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

class Html extends React.Component {
  render () {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html className='no-js' lang='en'>
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Bongs and Batteries</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {css}
        </head>
        <body>
          <div
            key='body'
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

export default Html
