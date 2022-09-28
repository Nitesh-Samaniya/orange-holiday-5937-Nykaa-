import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function NavbarPart3() {
  return (
    <Box style={{borderBottom:'4px solid #e6dede'}}>
        <Flex pt={3} pb={3} justify={'space-between'} w="78%" style={{ margin:'auto'}}>
            <Box>Makeup</Box>
            <Box>Skin</Box>
            <Box>Hair</Box>
            <Box>Appliances</Box>
            <Box>Bath & Body</Box>
            <Box>Natural</Box>
            <Box>Mom & Baby</Box>
            <Box>Health & Wellness</Box>
            <Box>Men</Box>
            <Box>Fragrance</Box>
            <Box>Pop Ups</Box>
        </Flex>
    </Box>
  )
}

export default NavbarPart3