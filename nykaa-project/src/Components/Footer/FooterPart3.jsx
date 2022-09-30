import {Box, Flex, Image, Text} from "@chakra-ui/react";
import free_shipping from "../../Images/footer/Free-shipping.svg"
import Authenticity from "../../Images/footer/Authenticity.svg"
import Brands from "../../Images/footer/Brands.svg"
import return_accepted from "../../Images/footer/return_accepted.svg"

function FooterPart3() {
  return (
    <Box>
        <Flex justify={"space-between"} w='80%' m='auto' mt={9} mb='60px'>
            {/* <Box> */}

                <Flex>   
                    <Box><Image src={free_shipping} alt='free_shipping'/></Box>
                    <Box ml={3}>
                        <Text color='#3f3f51' fontSize='17px'>FREE SHIPPING</Text>
                        <Text mt={2} mb={2} style={{borderBottom:'1px solid #e1e1e1'}}></Text>
                        <Text color='#3f3f51' fontSize='14px'>On Orders Above ₹499</Text>
                    </Box>
                </Flex>

                <Flex>   
                    <Box><Image src={return_accepted} alt='return_accepted'/></Box>
                    <Box ml={3}>
                        <Text color='#3f3f51' fontSize='17px'>EASY RETURNS</Text>
                        <Text mt={2} mb={2} style={{borderBottom:'1px solid #e1e1e1'}}></Text>
                        <Text color='#3f3f51' fontSize='14px'>15-Day Return Policy</Text>
                    </Box>
                </Flex>

                <Flex>   
                    <Box><Image src={Authenticity} alt='Authenticity'/></Box>
                    <Box ml={3}>
                        <Text color='#3f3f51' fontSize='17px'>100% AUTHENTIC</Text>
                        <Text mt={2} mb={2} style={{borderBottom:'1px solid #e1e1e1'}}></Text>
                        <Text color='#3f3f51' fontSize='14px'>Products Sourced Directly</Text>
                    </Box>
                </Flex>

                <Flex>   
                    <Box><Image src={Brands} alt='Brands'/></Box>
                    <Box ml={3}>
                        <Text color='#3f3f51' fontSize='17px'>2400+ BRANDS</Text>
                        <Text mt={2} mb={2} style={{borderBottom:'1px solid #e1e1e1'}}></Text>
                        <Text color='#3f3f51' fontSize='14px'>1.9 Lakh+ Products</Text>
                    </Box>
                </Flex>
                
            {/* </Box> */}
        </Flex>
    </Box>
  )
}

export default FooterPart3