import { Box, Button, Flex, Input, Text, Image } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import google_play_img from "../../Images/footer/Google-Play-Store.png"
import App_Store from "../../Images/footer/App_Store.png"


function FooterPart1() {
  return (
    <>
        <Box bg='#3f414d' color='white' p='30px' style={{lineHeight:'30px'}}>
            <Flex w='78%' m='auto' justify='space-between'>

                <Box>
                    <Text><EmailIcon /> special discount on your inbox</Text>
                    <Flex gap={3}>
                        <Input 
                            variant='flushed' 
                            placeholder='Your Email' 
                            _placeholder={{ color: 'white' }} 
                            w='150px'
                        />
                        <Button colorScheme='white' variant='outline'>
                            Send
                        </Button>
                    </Flex>
                </Box>

                <Box>
                    <Text>EXPERIENCE THE NYKAA MOBILE APP</Text>
                    <Flex gap='30px'>
                        <Box><Image w='130px' h='50px' src={google_play_img} alt="Google-play"/></Box>
                        <Box><Image w='130px' h='50px' src={App_Store} alt="App_Store"/></Box>
                    </Flex>
                </Box>

                <Box>
                    <Box>
                        <Text>FOR ANY HELP YOU MAY CALL US AT</Text>
                        <Text><PhoneIcon /> 1800-267-4444</Text>
                    </Box>
                    <Box>
                        <Text>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Text>
                    </Box>
                </Box>

            </Flex>

        </Box>
    </>
  )
}

export default FooterPart1