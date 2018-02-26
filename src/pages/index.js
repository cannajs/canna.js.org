import * as React from 'react'
import { styled } from 'styletron-react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Title = styled('h1', {
  textAlign: 'center'
})

const Index = ({ transition }) => {
  return (
    <div style={transition && transition.style}>
      Welcome to bongs and batteries.....
    </div>
  );
}

export default Index