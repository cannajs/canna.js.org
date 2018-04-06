import styled from 'styled-components'
import theme from '../utils/ds'

const Logo = styled.h1`
  transition: all .5s;
  margin: 0;
  color: ${theme.brand('heading')};
  font-family: ${theme.get('fontFamily.logo')};
`

export default Logo
