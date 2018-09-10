import styled from 'styled-components'
import theme from '../utils/ds'

const HR = styled.div`
&:before {
  display: flex;
  color: ${theme.get('contrastBorder')};
  content: '•••';
  padding: 0;
  letter-spacing: 3rem;
  margin: 2rem auto;
  justify-content: center;
}
`

export default HR
