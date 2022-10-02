import React from 'react'
import style from "./Navbar.module.css";
import { Box, Flex, HStack, Image, Spacer } from '@chakra-ui/react'
import NavbarPart1_backgroundImg from "../../Images/navbarPart1.png"
import { QuestionOutlineIcon } from '@chakra-ui/icons'

function NavbarPart1() {
  return (
    <Box>
      <Image className={style.img_pos} w='100%' src={NavbarPart1_backgroundImg} alt="img"/>
      <Box className={style.div_pos} w="80%">
        <Flex>
        <Box>Grand Festive Sale Is Live - Upto 50% Off</Box>
        <Spacer />
        <HStack spacing='12px'>
          <Box><QuestionOutlineIcon /> Get App | </Box>
          <Box><QuestionOutlineIcon /> Store & Events | </Box>
          <Box><QuestionOutlineIcon /> Gift Card | </Box>
          <Box><QuestionOutlineIcon /> Help  </Box>
        </HStack>
        </Flex>
      </Box>
     </Box>
  )
}

export default NavbarPart1