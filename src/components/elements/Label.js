import styled from 'styled-components'

export const Label = styled.h4`
  display: inline;

  &:after {
    font-size: 11px;
    color: ${
  props => {
    switch (props.content) {
      case 'sativa':
        return 'orange'
      case 'hybrid':
        return 'green'
      case 'indica':
        return 'purple'
      default:
        return ''
    }
  }};
    content: "${props => props.content}";
    margin-left: .5rem;
    letter-spacing: .1rem;
    vertical-align: .1rem;
  }

  &:last-child:after {
    content: "";
  }
`

export default Label
