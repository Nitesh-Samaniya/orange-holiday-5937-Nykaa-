import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";


function NavbarPart3() {
  return (
    <Box style={{borderBottom:'4px solid #e6dede'}}>
        {/* <Flex pt={3} pb={3} justify={'space-between'} w="78%" style={{ margin:'auto'}}> */}
          <Grid w='78%' m='auto' templateColumns={{
                base: "repeat(6,1fr)",
                md: "repeat(8,1fr)",
                lg: "repeat(11,1fr)"
                }}
                gap={3}>

            <Box><Link to="/makeup">Makeup</Link></Box>
            <Box><Link to="/skin">Skin</Link></Box>
            <Box><Link to="/hair">Hair</Link></Box>
            <Box><Link to="/appliances">Appliances</Link></Box>
            <Box><Link to="/bathandbaby">Bath & Body</Link></Box>
            <Box><Link to="/natural">Natural</Link></Box>
            <Box><Link to="/momandbaby">Mom & Baby</Link></Box>
            <Box><Link to="/healthandwellness">Health & Wellness</Link></Box>
            <Box><Link to="/men">Men</Link></Box>
            <Box><Link to="/fragrance">Fragrance</Link></Box>
            <Box><Link to="/popup">Pop Ups</Link></Box>

          </Grid>
        {/* </Flex> */}
    </Box>
  )
}

export default NavbarPart3