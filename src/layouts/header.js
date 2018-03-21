import * as React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import media from '../utils/breakpoints'
import { ZINDEX_FIXED } from '../utils/zindex'
import theme from '../utils/ds'

const Grid = styled.header`
  background-color: white;
  padding: 2rem 1rem 0;
  border-bottom: 1px solid ${theme.brand('border')};
${media.desktop`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: baseline;
`}
${media.giant``}
${media.huge`
  padding: 2rem 0 0;
`}
`

const Logo = styled.h1`
  transition: all .5s;
  margin: 0;
  color: ${theme.brand('heading')};
`

// color: 'transparent',
// background: 'url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat',
// backgroundPosition: '40% 50%',
// backgroundClip: 'text',

const NavContainer = styled.div`
  width: 100%;
  align-self: auto;
${media.desktop`
  margin: 0;
`}
`

const Nav = styled.ul`
  transition: max-height .5s cubic-bezier(0.0, 0.0, 0.2, 1);
  list-style: none;
  margin-left: auto;
  margin-bottom: 0;
  max-height: 0;
  overflow: hidden;

${media.desktop`
  position: static;
  height: auto;
  max-height: auto;
  overflow: initial;
  display: flex;
  justify-content: space-around;
  max-width: 400px;
`}
`

const NavItem = styled.li`
  a {
    font-family: ${theme.get('fontFamily.sans')};
    text-transform: uppercase;
    font-size: 12px;
  }
`

const Input = styled.input`
  display: none
`

const Toggle = styled.label`
  cursor: pointer;
  user-select: none;
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  z-index: ${ZINDEX_FIXED};
  font-size: 2rem;
  display: block;

  span {
    color: ${theme.brand('text')};
  }

${media.desktop`
  display: none;
`}
`

const Header = () => (
  <React.Fragment>
    <Headroom>
      <Grid>
        <Link to='/'>
          <Logo>
            Bongs and Batteries
          </Logo>
        </Link>
        <NavContainer>
          <Input type='checkbox' id='toggle' />
          <Toggle htmlFor='toggle'>
            <span>☻</span>
          </Toggle>
          <Nav>
            <NavItem><Link to='/info'>info</Link></NavItem>
            <NavItem><Link to='/rss'>feed</Link></NavItem>
            <NavItem><Link to='/blog'>blog</Link></NavItem>
            <NavItem><Link to='/category'>categories</Link></NavItem>
            <NavItem><Link to='/tags'>tags</Link></NavItem>
          </Nav>
        </NavContainer>
      </Grid>
    </Headroom>
  </React.Fragment>
)

export default Header
