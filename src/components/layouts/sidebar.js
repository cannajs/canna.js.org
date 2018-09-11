import * as React from 'react'
import styled from 'styled-components'
import theme from '../utils/ds'
import Box from '../elements/Box'
import Ad from '../elements/Ad'
import Sidebar from '../elements/Sidebar'
import StrainOfThe from '../../modules/StrainOfThe'

const SidebarBox = Box.extend`
  border-top: 1px solid ${theme.brand('border')};
  padding-top: 0;
`

export const SidebarLayout = () => {
  return (
    <Sidebar>
      <Ad placement='sidebar'>Advertisement</Ad>
      <div>
        <SidebarBox>
          <StrainOfThe />
        </SidebarBox>
      </div>
    </Sidebar>
  )
}

export default SidebarLayout
