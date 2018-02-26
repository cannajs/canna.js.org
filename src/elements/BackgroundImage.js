import { styled } from 'styletron-react'
import { BREAKPOINT_LG } from '../utils/breakpoints'

export const BackgroundImage = styled('img', {
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: .1,
  margin: '0 auto',
  maskImage: 'linear-gradient(left, transparent 0%, #000 20%, #000 50%, #000 80%, transparent 100%)',

  [`${BREAKPOINT_LG}`]: {

  }
})

export default BackgroundImage