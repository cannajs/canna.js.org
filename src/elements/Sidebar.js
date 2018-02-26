import { styled } from 'styletron-react'
import { BREAKPOINT_LG, BREAKPOINT_MD } from '../utils/breakpoints'

export const Sidebar = styled('aside', {
  borderTop: '4px solid #000',
  paddingTop: '2rem',
  display: 'grid',
  marginBottom: '1rem',
  gridTemplateRows: 'auto auto',
  gridTemplateColumns: 'auto',
  gridGap: '2rem',

  [`${BREAKPOINT_LG}`]: {
    padding: '0 0 1rem 1rem',
    border: 'none',
    display: 'block'
  },

  [`${BREAKPOINT_MD}`]: {
    gridTemplateColumns: 'max-content auto',
    gridTemplateRows: 'auto'
  }
})

export default Sidebar