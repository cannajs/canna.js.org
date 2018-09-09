import styled from 'styled-components'
import theme from '../utils/ds'

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  grid-gap: ${props => props.padding};
`

export default Grid
