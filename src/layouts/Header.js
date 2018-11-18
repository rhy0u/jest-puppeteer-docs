import React from 'react'
import { Box } from '@smooth-ui/core-em'
import fakeHeader from 'images/fakeheader.png'

const Header = () => (
  <Box height={55} textAlign="center">
    <img src={fakeHeader} alt="" />
  </Box>
)

export default Header
