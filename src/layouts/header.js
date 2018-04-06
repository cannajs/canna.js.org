import * as React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import hex2rgba from 'hex2rgba'
import A from '../elements/A'
import Logo from '../elements/Logo'
import media from '../utils/breakpoints'
import theme from '../utils/ds'

const Grid = styled.div`
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

const Wrapper = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  background-image: -webkit-linear-gradient(top, transparent, ${theme.brand('background')});
  background-image: linear-gradient(top, transparent, ${theme.brand('background')});
`

// color: transparent;
// background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
// background-position: 40% 50%;
// background-clip: text;

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
  justify-content: space-between;
  max-width: 400px;
`}
`

const NavItem = styled.li`
  padding: 0;

  ${A} {
    font-family: ${theme.get('fontFamily.sans')};
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    color: ${theme.brand('link')};
    letter-spacing: 1px;
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
  bottom: calc(1rem / 2);
  z-index: ${theme.z('fixed')};
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
      <Wrapper>
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
      </Wrapper>
    </Headroom>
  </React.Fragment>
)

export default Header
