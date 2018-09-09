import styled from 'styled-components'
import theme from '../utils/ds'

const Focus = styled.div`
  font-family: ${theme.get('fontFamily.focus')};
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 400;
  color: ${theme.brand('link')};
  letter-spacing: .05rem;
  word-spacing: .02rem;
  text-align: justify;
`

export default Focus
