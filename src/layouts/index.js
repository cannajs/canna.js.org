import * as React from 'react'
import { styled } from 'styletron-react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from './header'
import Sidebar from '../elements/Sidebar'
import SidebarLayout from './sidebar'
import { BREAKPOINT_LG } from '../utils/breakpoints'
import BackgroundImage from '../elements/BackgroundImage'

import introImg from '../static/cannabis.jpg'
import './critical.css'

const Wrapper = styled('div', {
  display: 'grid',
  maxWidth: '1300px',
  margin: '0 auto'
})

const Container = styled('section', {
  display: 'grid',
  margin: '0 auto',
  padding: '0 1rem',
  width: '100%',
  gridTemplateRows: 'auto',

  [`${BREAKPOINT_LG}`]: {
    gridTemplateColumns: 'auto calc(300px + 1rem)'
  }
})

const Primary = styled('div', {
  paddingBottom: '1rem',
  [`${BREAKPOINT_LG}`]: {
    padding: 0
  }
})

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Wrapper>
        <Header key='header' />
        <Container key='container'>
          <Primary>
            <BackgroundImage src={introImg} />
            {children()}
          </Primary>
          <Sidebar>
            <SidebarLayout />
          </Sidebar>
        </Container>
      </Wrapper>
    )
  }
}

export default Layout