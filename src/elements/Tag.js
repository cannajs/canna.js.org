import { styled } from 'styletron-react'
import { BREAKPOINT_LG } from '../utils/breakpoints'

export const Tag = styled('li', {
  display: 'inline',
  listStyle: 'none',
  padding: 0,
  ':after': {
    content: '", "'
  },
  ':last-child:after': {
    content: '""'
  }
})

export default Tag