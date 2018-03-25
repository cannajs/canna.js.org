import styled from 'styled-components'

export const Tag = styled.li`
  display: inline;
  list-style: none;
  padding: 0;

  &:after {
    content: ", "
  }

  &:last-child:after {
    content: ""
  }
`

export default Tag
