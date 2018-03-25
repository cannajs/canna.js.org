import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Img from '../elements/Img'

import introImg from '../static/images/cannabis.jpg'

const Title = styled.h2``

const Index = ({ transition }) => {
  return (
    <div style={transition && transition.style}>
      <Img src={introImg} />
      <Title>welcome...</Title>
    </div>
  )
}

export default Index
