import * as React from 'react'
import Box from '../elements/Box'
import Ad from '../elements/Ad'

export const Sidebar = () => {
  return [
    <Ad key={`key`}>
      Advertisement
    </Ad>,
    <div key={`sidebar`}>
      <Box>
        <h3>Strain of the Week</h3>
        <p>something something something darkside</p>
      </Box>
      <Box>
        <h3>Latest Cannabis News</h3>
        <p>something something something darkside</p>
      </Box>
      <Box>
        <h3>Cannabis &amp; Technology</h3>
        <p>something something something darkside</p>
      </Box>
    </div>
  ]
}

export default Sidebar