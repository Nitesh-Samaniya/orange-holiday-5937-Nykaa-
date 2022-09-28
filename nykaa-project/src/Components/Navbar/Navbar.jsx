import { Box } from '@chakra-ui/react'
import React from 'react'
import NavbarPart1 from './NavbarPart1'
import NavbarPart2 from './NavbarPart2'
import NavbarPart3 from './NavbarPart3'

function Navbar() {
  return (
    <Box>
      <NavbarPart1 />
      <NavbarPart2 />
      <NavbarPart3 />
    </Box>
  )
}

export default Navbar