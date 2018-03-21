import styled from 'styled-components'
import theme from '../utils/ds'
import media from '../utils/breakpoints'

const Sidebar = styled.aside`
  padding-top: 2rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-gap: 2rem;

${media.tablet`
  grid-template-columns: max-content auto;
  grid-template-rows: auto;
  border-top: 0;
`}
${media.desktop`
  padding: 0 0 1rem 1rem;
  border-left: 1px solid ${theme.brand('border')};
  display: block;
`}
${media.giant`
  padding: 0 0 1rem 1rem;
  border: none;
  display: block;
`}
${media.huge``}
`

export default Sidebar
