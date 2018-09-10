import styled from 'styled-components'

export const Tag = styled.li`
  display: inline;
  list-style: none;
  padding: 0;

  a {
    border-bottom: 1px solid;
  }

  &:after {
    content: ", "
  }

  &:last-child:after {
    content: ""
  }
`

export default Tag
