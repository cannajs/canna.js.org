import * as React from 'react'
import { styled } from 'styletron-react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { BREAKPOINT_LG } from '../utils/breakpoints'
import { ZINDEX_FIXED } from '../utils/zindex'

const Container = styled('header', {
  [`${BREAKPOINT_LG}`]: {

  }
})

const Grid = styled('div', {
  borderBottom: '4px solid black',
  margin: '1rem',
  [`${BREAKPOINT_LG}`]: {
    display: 'grid',
    gridTemplateColumns: 'max-content auto'
  }
})

const Logo = styled('h1', {
  margin: 0,

  [`${BREAKPOINT_LG}`]: {

  }
})

const NavContainer = styled('div', {
  width: '100%',
  alignSelf: 'auto',

  [`${BREAKPOINT_LG}`]: {
    margin: 0
  }
})

const Nav = styled('ul', {
  transition: 'max-height .5s cubic-bezier(0.0, 0.0, 0.2, 1)',
  listStyle: 'none',
  marginLeft: 'auto',
  marginBottom: 0,
  maxHeight: 0,
  overflow: 'hidden',

  [`${BREAKPOINT_LG}`]: {
    position: 'static',
    height: 'auto',
    maxHeight: 'auto',
    overflow: 'initial',
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '400px'
  }
})

const NavItem = styled('li', {})

const Hamburger = styled('div', {
  position: 'absolute',
  top: 0,

  [`${BREAKPOINT_LG}`]: {
    display: 'none'
  }
})

const Input = styled('input', {
  display: 'none'
})

const Toggle = styled('label', {
  cursor: 'pointer',
  userSelect: 'none',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  zIndex: ZINDEX_FIXED,
  fontSize: '2rem',

  [`${BREAKPOINT_LG}`]: {
    display: 'none'
  }
})

const Header = () => (
  <Container>
    <Grid>
      <Logo>
        <Link to="/">Bongs and Batteries</Link>
      </Logo>
      <NavContainer>
        <Input type="checkbox" id="toggle" />
        <Toggle htmlFor="toggle">
          <span>☻</span>
        </Toggle>
        <Nav>
          <NavItem><Link to="/info">info</Link></NavItem>
          <NavItem><Link to="/rss">feed</Link></NavItem>
          <NavItem><Link to="/blog">blog</Link></NavItem>
          <NavItem><Link to="/category">categories</Link></NavItem>
          <NavItem><Link to="/tags">tags</Link></NavItem>
        </Nav>
      </NavContainer>
    </Grid>
  </Container>
)

export default Header
