import styled from 'styled-components'
import theme from '../utils/ds'

const Title = styled.div`
  font-family: ${theme.get('fontFamily.heading')};
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  color: ${theme.brand('link')};
  letter-spacing: 1px;
  text-align: justify;
  line-height: 3rem;

  &:before {
    font-size: 22px;
  }
`

export default Title
