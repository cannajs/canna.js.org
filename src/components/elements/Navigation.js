import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../utils/ds'
import media from '../utils/breakpoints'

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
  margin-top: 1rem;
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
  margin-top: 0;
  `}
`

const NavItem = styled.li`
  padding: 0;

  a {
    font-family: ${theme.get('fontFamily.heading')};
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    color: ${theme.brand('link')};
    letter-spacing: 1px;

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: ${theme.brand('contrastLink')};
      transition: width .2s ease-in-out;
    }

    &:hover:after {
      width: 100%;
    }
  }
`

const Input = styled.input`
  display: none
`

const Toggle = styled.label`
  display: block;
  position: fixed;
  cursor: pointer;
  user-select: none;
  right: 1rem;
  top: 1.55rem;
  z-index: ${theme.z('fixed')};
  font-size: 2rem;

  span {
    color: ${theme.brand('text')};
  }

  ${media.desktop`
  display: none;
  `}
`

const Navigation = () => {
  return (
    <NavContainer>
      <Input type='checkbox' id='toggle' />
      <Toggle htmlFor='toggle'>
        <span>☻</span>
      </Toggle>
      <Nav>
        <NavItem>
          <Link to='/category/gear'>gear</Link>
        </NavItem>
        <NavItem>
          <Link to='/category/strains'>strains</Link>
        </NavItem>
        <NavItem>
          <Link to='/category/food'>food</Link>
        </NavItem>
        <NavItem>
          <Link to='/category/tech'>tech</Link>
        </NavItem>
        <NavItem>
          <Link to='/category/science'>science</Link>
        </NavItem>
        <NavItem>
          <Link to='/category/law'>law</Link>
        </NavItem>
      </Nav>
    </NavContainer>
  )
}

export default Navigation
