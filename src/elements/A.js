import styled from 'styled-components'
import theme from '../utils/ds'

const Link = styled.a`
  font-family: ${theme.get('fontFamily.sans')};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  color: ${theme.brand('link')};
  letter-spacing: 1px;
  display: inline-block;
  overflow: hidden;
`

const A = Link.extend`
  span:before {
    position: absolute;
    white-space: nowrap;
    top: 100%;
    content: attr(data-hover);
    font-weight: 500;
  }

  ${Link}:hover span,
  ${Link}:focus span {
    transform: translateY(-100%);
  }
`

export default A
