import { styled } from 'styletron-react'
import { BREAKPOINT_LG } from '../utils/breakpoints'

export const Ad = styled('div', {
  display: 'flex',
  margin: '0 auto',
  width: '300px',
  height: '250px',
  border: '1px solid #000',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#222',
  fontSize: '14px',
  letterSpacing: '1px',
  textTransform: 'uppercase',

  [`${BREAKPOINT_LG}`]: {
    margin: '0 auto 1rem'
  }
})

export default Ad