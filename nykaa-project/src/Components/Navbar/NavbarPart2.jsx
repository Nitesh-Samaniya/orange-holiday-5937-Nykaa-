import { Box, Flex, Image, Input, Spacer } from '@chakra-ui/react'
import React from 'react'
import Nykaa_icon from "../../Images/Nykaa_icon.png"
import style from "./Navbar.module.css";


function NavbarPart2() {
  return (
    <Box style={{borderBottom:'1px solid #e6dede'}}>
        <Box w="78%" style={{ margin:'auto', marginTop:'-30px'}}>
            <Flex>

                <Flex justify={'space-between'} w="55%">
                    <Box><Image boxSize='70px' src={Nykaa_icon} alt="Nykaa_icon"/></Box>
                    <Box className={style.title_align_navbarPart2}><b>Categories</b></Box>
                    <Box className={style.title_align_navbarPart2}><b>Brands</b></Box>
                    <Box className={style.title_align_navbarPart2}><b>Luxe</b></Box>
                    <Box className={style.title_align_navbarPart2}><b>Nykaa Fashion</b></Box>
                    <Box className={style.title_align_navbarPart2}><b>Beauty Advice</b></Box>
                </Flex>

                <Spacer />

                <Flex  justify={'space-between'} w="30%">
                    <Box className={style.title_align_navbarPart2}><Input style={{borderRadius:'10px'}} variant='filled' type="text" placeholder='Search On Nykaa'/></Box>
                    <Box className={style.title_align_navbarPart2} style={{color:'gray'}}>Account</Box>
                    <Box className={style.title_align_navbarPart2}><b>Cart</b></Box>
                </Flex>

            </Flex>
        </Box>
    </Box>
  )
}

export default NavbarPart2