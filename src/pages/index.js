import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// import introImg from '../static/images/cannabis.jpg'

const Title = styled.h2``

const Index = ({ transition }) => {
  return (
    <div style={transition && transition.style}>
      <Title>welcome...</Title>
    </div>
  )
}

export default Index
