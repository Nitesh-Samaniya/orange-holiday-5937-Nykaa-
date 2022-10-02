import { Box, Text, Image, Grid } from "@chakra-ui/react";
import img1 from "../../Images/home_middle/1.avif";
import img2 from "../../Images/home_middle/2.avif";
import img3 from "../../Images/home_middle/3.avif";
import img4 from "../../Images/home_middle/4.avif";
import img5 from "../../Images/home_middle/5.avif";
import img6 from "../../Images/home_middle/6.avif";
import img7 from "../../Images/home_middle/7.avif";
import img8 from "../../Images/home_middle/8.avif";


function HomeMiddlePart1() {
  return (
    <Box w='100%'>
        <Box w='80%' m='auto' textAlign='center' mb={8}>
            <Text fontSize='24px' color='#3f414d'>FEATURED BRANDS</Text>

            <Grid lineHeight={1.2} w='79%' m='auto' templateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(4,1fr)"
                }}
                gap={5} 
            >
                <Box>
                    <Image src={img1} alt="img1"/>
                    <Box bg='white' p={4}>
                        <Text color='red.500'>Minimum 25% Off</Text>
                        <Text>Free Lipstick On Rs.699+</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img2} alt="img1"/>
                    <Box bg='white' p={4} h="70px">
                        <Text color='red.500'>Minimum 25% Off</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img3} alt="img1"/>
                    <Box bg='white' p={4} h="70px">
                        <Text color='red.500'>Buy 2 at 12 Off</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img4} alt="img1"/>
                    <Box bg='white' p={4}>
                        <Text color='red.500'>Minimum 50% Off</Text>
                        <Text>Worth 249 On Rs.599</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img5} alt="img1"/>
                    <Box bg='white' p={4} h='70px'>
                        <Text color='red.500'>Minimum 30% Off</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img6} alt="img1"/>
                    <Box bg='white' p={4}>
                        <Text color='red.500'>Minimum 25% Off</Text>
                        <Text>Build Your Healthy Hair</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img7} alt="img1"/>
                    <Box bg='white' p={4}>
                        <Text color='red.500'>Minimum 25% Off</Text>
                        <Text>Free Pouch on Rs. 1500</Text>
                    </Box>
                </Box>

                <Box>
                    <Image src={img8} alt="img1"/>
                    <Box bg='white' p={4}>
                        <Text color='red.500'>Minimum 50% Off</Text>
                        <Text>On Entire Range</Text>
                    </Box>
                </Box>

            </Grid>
        </Box>
    </Box>
  )
}

export default HomeMiddlePart1