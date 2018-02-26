import { styled } from 'styletron-react'
import { BREAKPOINT_LG } from '../utils/breakpoints'

export const Category = styled('div', {
  position: 'relative',
  display: 'flex',
  padding: '.5rem 1rem',
  backgroundColor: '#222',
  margin: '0 0 1rem',
  justifyContent: 'flex-end',
  fontFamily: 'Roboto, sans-serif',
  textTransform: 'uppercase',
  fontSize: '13px'
})

export default Category