import * as React from 'react'
import styled from 'styled-components'
import Img from '../elements/Img'
// import theme from '../utils/ds'
import introImg from '../../images/cannabis.jpg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin-bottom: 1rem;

  img {
    width: 100%;
    margin: 0;
  }
`

const FeaturedPosts = () => {
  return (
    <Container>
      <Img src={introImg} />
    </Container>
  )
}

export default FeaturedPosts
