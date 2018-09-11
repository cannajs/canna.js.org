import styled from 'styled-components'
import theme from '../utils/ds'

export const Timestamp = styled.div`
  font-family: ${theme.get('fontFamily.footnote')};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .03rem;
  color: ${theme.brand('text')};
  margin-bottom: 1rem;
`

export default Timestamp
