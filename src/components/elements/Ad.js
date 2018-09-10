import styled from 'styled-components'
import media from '../utils/breakpoints'
import theme from '../utils/ds'

const placements = {
  sidebar: {
    width: '300px', height: '250px'
  },
  skybar: {
    width: '900px', height: '120px'
  },
  default: {
    width: 'auto', height: 'auto'
  }
}

const Ad = styled.div`
  display: flex;
  display: ${props => props.placement === 'skybar' && 'none'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  padding: ${props => props.padding ? props.padding : 0};
  width: ${props => placements[props.placement] ? placements[props.placement].width : placements['default'].width};
  height: ${props => placements[props.placement] ? placements[props.placement].height : placements['default'].height};
  max-width: 100%;
  border: 1px solid ${theme.brand('border')};
  justify-content: center;
  align-items: center;
  color: ${theme.brand('text')};
  font-size: 14px;
  letter-spacing: 1px;
  font-family: ${theme.get('fontFamily.body')};
  text-transform: uppercase;
${media.desktop`
  display: flex;
  grid-column: ${props => props.placement === 'skybar' ? 'span 2' : ''};
  margin: ${props => props.margin ? props.margin : '0 auto 1rem'};
  padding: ${props => props.padding ? props.padding : 0};
`}
`

export default Ad
