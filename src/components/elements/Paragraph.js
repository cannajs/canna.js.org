import styled from 'styled-components'
import theme from '../utils/ds'

const Paragraph = styled.p`
  font-family: ${theme.get('fontFamily.paragraph')};
  font-size: 18px;
  color: ${theme.brand('body')};
`

export default Paragraph
