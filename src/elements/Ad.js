import styled from 'styled-components'
import media from '../utils/breakpoints'
import theme from '../utils/ds'

const Ad = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${props => props.placement === 'sidebar' ? '300px' : '900px'};
  height: 250px;
  border: 1px solid ${theme.brand('border')};
  justify-content: center;
  align-items: center;
  color: ${theme.brand('text')};
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
${media.desktop`
    margin: 0 auto 1rem;
`}
`

export default Ad
