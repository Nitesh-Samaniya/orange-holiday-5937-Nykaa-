import {Box, Grid, Text} from "@chakra-ui/react";
import "./Footer.css"

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
                <Text fontSize='sm'>Careers</Text>
                <Text fontSize='sm'>Authenticity</Text>
                <Text fontSize='sm'>Press</Text>
                <Text fontSize='sm'>Testimonials</Text>
                <Text fontSize='sm'>Nykaa CSR</Text>
                <Text fontSize='sm'>Responsible Disclosure</Text>
                <Text fontSize='sm'>Investor Relations</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Help</Text>
                <Text fontSize='sm'>Contact Us</Text>
                <Text fontSize='sm'>Frequently asked questions</Text>
                <Text fontSize='sm'>Store Locator</Text>
                <Text fontSize='sm'>Cancellation & Return</Text>
                <Text fontSize='sm'>Nykaa CSR</Text>
                <Text fontSize='sm'>Shipping & Delivery</Text>
                <Text fontSize='sm'>Sell on Nykaa</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Inspire Me</Text>
                <Text fontSize='sm'>Beauty Book</Text>
                <Text fontSize='sm'>Nykaa TV</Text>
                <Text fontSize='sm'>Nykaa Network</Text>
                <Text fontSize='sm'>Buying Guides</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Quick Links</Text>
                <Text fontSize='sm'>Offer Zone</Text>
                <Text fontSize='sm'>New Launches</Text>
                <Text fontSize='sm'>Nykaa Man</Text>
                <Text fontSize='sm'>Nykaa Fashion</Text>
                <Text fontSize='sm'>Nykaa Pro</Text>
                <Text fontSize='sm'>Nykaa femina beauty awards winners 2019</Text>
                <Text fontSize='sm'>Site Map</Text>
            </Box>

            <Box>
                <Text fontSize='lg' mb={3}>Top Categories</Text>
                <Text fontSize='sm'>Makeup</Text>
                <Text fontSize='sm'>Skin</Text>
                <Text fontSize='sm'>Hair</Text>
                <Text fontSize='sm'>Personal Care</Text>
                <Text fontSize='sm'>Appliances</Text>
                <Text fontSize='sm'>Mom and Baby</Text>
                <Text fontSize='sm'>Wellness</Text>
                <Text fontSize='sm'>Fragrance</Text>
                <Text fontSize='sm'>Natural</Text>
                <Text fontSize='sm'>Luxe</Text>
            </Box>

        </Grid>
    </Box>
  )
}

export default FooterPart2