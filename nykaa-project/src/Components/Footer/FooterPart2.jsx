import {Box, Grid, Text} from "@chakra-ui/react";
// import "./Footer.css"

function FooterPart2() {
  return (
    <Box color='white' bg="#8c8d94" w='100%' p='30px' style={{lineHeight: '25px',cursor:'pointer'}}>
        <Grid w='79%' m='auto' templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)"
            }}
        >
            <Box>
                <Text fontSize='lg' mb={3}>Who are we?</Text>
                <Text
                    fontSize='sm'
                    _hover={{ color:'red.500' }}
                >
                    Careers
                </Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Authenticity</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Press</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Testimonials</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa CSR</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Responsible Disclosure</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Investor Relations</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Help</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Contact Us</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Frequently asked questions</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Store Locator</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Cancellation & Return</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa CSR</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Shipping & Delivery</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Sell on Nykaa</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Inspire Me</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Beauty Book</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa TV</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa Network</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Buying Guides</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Quick Links</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Offer Zone</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>New Launches</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa Man</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa Fashion</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa Pro</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Nykaa femina beauty awards winners 2019</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Site Map</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Top Categories</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Makeup</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Skin</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Hair</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Personal Care</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Appliances</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Mom and Baby</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Wellness</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Fragrance</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Natural</Text>
                <Text _hover={{ color:'red.500' }} fontSize='sm'>Luxe</Text>
            </Box>

        </Grid>
    </Box>
  )
}

export default FooterPart2