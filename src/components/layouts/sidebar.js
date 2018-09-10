import * as React from 'react'
import styled from 'styled-components'
import theme from '../utils/ds'
import Box from '../elements/Box'
import Ad from '../elements/Ad'
import Sidebar from '../elements/Sidebar'
import StrainOfTheDay from '../../modules/StrainOfTheDay'

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
          <StrainOfTheDay />
        </SidebarBox>
      </div>
    </Sidebar>
  )
}

export default SidebarLayout
