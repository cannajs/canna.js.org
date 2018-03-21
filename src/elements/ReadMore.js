import styled from 'styled-components'
import theme from '../utils/ds'

const ReadMore = styled.div`
  margin-bottom: 1rem;
  font-size: 14px;
  text-transform: uppercase;

  a {
    font-weight: 600;
    color: ${theme.brand('link')};
  }
`

export default ReadMore
