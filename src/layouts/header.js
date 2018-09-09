import * as React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../utils/breakpoints'
import theme from '../utils/ds'
import Navigation from '../elements/Navigation'
import Img from '../elements/Img'
import logo from '../static/images/logo.svg'

const Logo = styled.div`
  img {
    margin: 0;
  }
`

const Grid = styled.div`
  padding: 2rem 1rem 0;
  border-bottom: 1px solid ${theme.brand('border')};
${media.desktop`
  display: grid;
  padding: 2rem 1rem 1rem;
  grid-template-columns: max-content auto;
  align-items: baseline;
`}
${media.giant`
  padding: 2rem 1rem 1rem;
`}
${media.huge`
  padding: 2rem 0 1rem;
`}
`

const Wrapper = styled.header`
  max-width: 1300px;
  margin: 0 auto;
`

// color: transparent;
// background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
// background-position: 40% 50%;
// background-clip: text;

const Header = () => (
  <Headroom>
    <Wrapper>
      <Grid>
        <Link to='/'>
          <Logo>
            <Img src={logo} />
          </Logo>
        </Link>
        <Navigation />
      </Grid>
    </Wrapper>
  </Headroom>
)

export default Header
