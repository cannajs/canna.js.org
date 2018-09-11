import styled from 'styled-components'
import theme from '../utils/ds'

const ReadMore = styled.div`
  display: inline;
  font-family: ${theme.get('fontFamily.footnote')};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .02rem;
  color: ${theme.brand('link')};
  border-bottom: 1px solid;
`

export default ReadMore
