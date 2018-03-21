import styled from 'styled-components'
import theme from '../utils/ds'

const Category = styled.div`
  position: relative;
  display: flex;
  padding: .5rem 1rem;
  background-color: ${theme.brand('contrastBackground')};
  margin: 0 0 1rem;
  justify-content: flex-end;
  font-family: ${theme.get('fontFamily.sans')};
  text-transform: uppercase;
  font-size: 13px;
`

export default Category
