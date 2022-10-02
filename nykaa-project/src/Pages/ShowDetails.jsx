import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router';
import {Box, Button, Flex, Grid, Text} from "@chakra-ui/react"
import ReactImageMagnify from 'react-image-magnify';
import { CartContext } from '../Context/CartContext';
import {addToCart} from "../Context/action";


function ShowDetails() {
  const [data, setData] = useState([]);
  const params = useParams()
  // console.log(params)
  const {dispatch} = useContext(CartContext);


  useEffect(()=>{
    axios.get(`https://sale-asos-women.herokuapp.com/${params.category}/${params.id}`)
    .then((res)=>{
      // console.log("check data",res);
      setData(res.data);
    })
  },[params.category,params.id]);
  // console.log("dataaa",data)
  return (
    <Box w={'80%'} m='auto' bg={'white'} mt={9} mb='50px'>

      <Grid w='79%' m='auto' templateColumns={{
      base: "repeat(1,1fr)",
      md: "repeat(1,1fr)",
      lg: "repeat(2,1fr)"
      }}
      gap={5}>

        <Box w='227px' h={'215px'}>
          <ReactImageMagnify {...{
      smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: data.image
      },
      largeImage: {
          src: data.image,
          width: 600,
          height: 900
      }
  }} />
        </Box>

        <Box>
          <Text
            mt={2}
            lineHeight={'24px'}
            pb='0.25rem' 
            color={'#001325'} 
            fontSize='20px' 
            fontWeight={'600'}>{data.title}</Text>

            <Text>({data.weight})</Text>
            <br />
            <Flex gap={4}>
            <Text fontSize={'16px'} color='red.500' mb={0}>Star: {data.rating}/5</Text>
            <Text>Rating: {data.total_ratings}</Text>
            <Text>&</Text>
            <Text>{data.reviews} reviews</Text>
            <Text>Q&As</Text>
            </Flex>

            <Flex mt={3} gap={2}>

            <Text
                        as='del'
                        mr='0.25rem'
                        // ml={4}
                        // mt={'30px'}
                        color="rgba(0,19,37,0.64)"
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='20px'
                        letterSpacing={0}
                        >
                        MRP: ₹{data.price}
                      </Text>

                      <Text
                        mr='0.25rem'
                        color="#001325"
                        fontSize='18px'
                        fontWeight='700'
                        lineHeight='20px'
                        letterSpacing='-0.1px'
                        >
                        ₹{data.current_price}
                      </Text>

                      <Text
                        mr='0.25rem'
                        color="#008945"
                        ml='4px'
                        fontSize='16px'
                        fontWeight='500'
                        lineHeight='20px'
                        letterSpacing='-0.1px'
                      >
                        {data.discount}% Off
                      </Text>
                        </Flex>

                        <Text 
                          my={2}
                          fontSize='17px'
                          fontWeight={500}
                          color={'rgba(0,19,37,0.64)'}>Inclusive All Taxes</Text>

                          {/* <Box bg='gray.300' w='100%' h={'50px'} p={4} color='red'>
                          Free Mini Lipstick worth Rs. 249 on Rs. 599
                          </Box> */}
                          <Text as={'mark'}>Free Mini Lipstick worth Rs. 249 on Rs. 599</Text>
                          <br />
                          <Text as='i' mt={3}>Shades: {data.shades}</Text>
                          <br />
                          <br />
                          <Button
                            onClick={()=>dispatch(addToCart(data))} 
                            mb={8} colorScheme='pink' variant='outline'>
                            Add to Cart
                          </Button>
        </Box>
    </Grid>
    </Box>
    
  )
}

export default ShowDetails