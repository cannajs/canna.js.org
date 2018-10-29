import styled from 'styled-components'
import theme from '../utils/ds'

const Category = styled.div`
  position: relative;
  display: flex;
  padding: 1rem 0 0;
  margin: 0;
  justify-content: flex-end;
  font-family: ${theme.get('fontFamily.sans')};
  text-transform: uppercase;
  font-size: 13px;

  a {
    border-bottom: 1px solid;
  }
`

export default Category
