import { 
  Box, 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Image,
  Flex,
  Grid,
  Button,
  Stack,
  Skeleton
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import popup from "../Images/Pages/popup.webp"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { useSearchParams } from "react-router-dom";


const getCurrentPageFromUrl = (val) => {
  val = Number(val);
  if (typeof val === "number" && val <= 0) {
    val = 1;
  }
  if (!val) {
    val = 1;
  }
  return val;
};

function getUrl(url,sort,orderBy,filterBy){
  if(sort && orderBy && filterBy){
    url = `${url}&_sort=${sort}&_order=${orderBy}&discount=${filterBy}`;
  }
  else if(sort && orderBy){
    url = `${url}&_sort=${sort}&_order=${orderBy}`
  }
  else if(filterBy){
    url = `${url}&discount=${filterBy}`;
  }
  return url;
}

function PopUps() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);
  const[orderBy, setOrderBy] = useState("");
  const sort = "current_price";
  const [filterBy, setFilterBy] = useState("")
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    let apiUrl = getUrl(
      `https://nykaa-server.onrender.com/popups?_page=${page}&_limit=9`,
      sort,
      orderBy,
      filterBy
    );
    
    axios.get(apiUrl)
    .then((res)=>{
      setLoading(false);
      setData(res.data)
    })
    .catch((err)=>{
      setLoading(true);
    })
  },[page,orderBy,filterBy])

  useEffect(() => {
    // setSearchParams({ page, orderBy});
    let paramObj = { page };
    if(orderBy){
      paramObj.orderBy = orderBy;
    }
    if(filterBy){
      paramObj.filterBy = filterBy;
    }
    setSearchParams(paramObj);
  }, [page,orderBy,filterBy,setSearchParams]);


  if(loading){
    return (
      <Stack my={20}>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    )
  }


  console.log(data)
  return (
    <Box w="78%" m='auto' mt='5' mb='5'>

      <Box color='gray.500'>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='/makeup'>PopUps</BreadcrumbLink>
          </BreadcrumbItem>

        </Breadcrumb>
      </Box>

      <Box textAlign='center'>
        <Text fontSize='24px' fontWeight={600}>Nykaa Cosmetics + Moi Range</Text>
        <Image src={popup} alt="popup" mb={3} mt={3}/>
      </Box>

      <Box textAlign='center' fontSize='24px' fontWeight={600} mb='20px'>
        <Text>All Products</Text>
      </Box>

      <Box>
        <Flex>

          <Box p={5} bg={'white'} h="435px" textAlign={'center'}>
            <Text fontSize={'24px'} fontWeight='600' mb={2}>Filter</Text>
            <Flex flexDirection={'column'} gap={2}>
                <Button 
                  isActive
                  colorScheme='pink' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setOrderBy("asc")}
                >
                  PRICE LOW TO HIGH
                </Button>

                <Button
                  isActive
                   colorScheme='pink' 
                   width='230px' 
                   height='38px' 
                   border='2px' 
                   variant='outline' 
                  onClick={()=>setOrderBy("desc")}>PRICE HIGH TO LOW</Button>

                <Button 
                  colorScheme='teal' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setOrderBy("")}
                > 
                RESET PRICE
                </Button>

                <Button
                  isActive 
                  colorScheme='pink' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setFilterBy("25")}>GET 25% DISCOUNT</Button>

                <Button
                  isActive 
                  colorScheme='pink' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setFilterBy("24")}>GET 24% DISCOUNT</Button>

                <Button
                  isActive 
                  colorScheme='pink' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setFilterBy("23")}>GET 23% DISCOUNT</Button>

                <Button
                  isActive 
                  colorScheme='pink' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setFilterBy("22")}>GET 22% DISCOUNT</Button>

                <Button 
                  colorScheme='teal' 
                  width='230px' 
                  height='38px' 
                  border='2px' 
                  variant='outline' 
                  onClick={()=>setFilterBy("")}>RESET DISCOUNT</Button>
            </Flex>
          </Box>

          <Box>
          <Grid w='79%' m='auto' templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)"
                }}
                gap={5}
            >
              {
                data.map((el)=>(
                  <Box key={el.id} bg='white' w='100%'>
                    <Image 
                      maxH='215px' 
                      src={el.image} 
                      alt="product-image"
                      verticalAlign='middle'
                      mb={4}
                    />
                    <Text 
                      lineHeight='20px' 
                      fontSize='14px' 
                      fontWeight='500'
                      overflow='hidden'
                      height='42px'
                      mb='0.75rem'
                      textAlign='center'
                      color='#001325'
                      textOverflow='ellipsis'
                    >
                      {el.title}
                    </Text>

                    <Box
                      lineHeight='20px'
                      mb='0.7rem'
                      display='inline-flex'
                      alignItems='center'
                      justifyContent='center'
                      flexWrap='wrap'
                      // textAlign='center'
                    >
                      <Text
                        as='del'
                        mr='0.25rem'
                        ml={4}
                        color="rgba(0,19,37,0.64)"
                        fontSize='14px'
                        fontWeight='400'
                        lineHeight='20px'
                        letterSpacing={0}
                      >
                        MRP: ₹{el.price}
                      </Text>

                      <Text
                        mr='0.25rem'
                        color="#001325"
                        fontSize='16px'
                        fontWeight='500'
                        lineHeight='20px'
                        letterSpacing='-0.1px'
                      >
                        ₹{el.current_price}
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
                        {el.discount}% Off
                      </Text>

                    </Box>

                    <Text
                      textAlign='center'
                      fontSize='14px'
                      fontWeight='400px'
                      lineHeight='20px'
                      letterSpacing={0}
                      color='#fc2779'
                      mb='0.5rem'
                    >
                      Enjoy Free Gift
                    </Text>

                    <Text
                      textAlign='center'
                      fontSize='13px'
                      fontWeight='400px'
                      lineHeight='20px'
                      letterSpacing={0}
                      color='#657786'
                      mb='0.5rem'
                    >
                      Shades {el.shades}
                    </Text>
                  </Box>
                ))
              }
              <Box>
                <Button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</Button>
                <Button>{page}</Button>
                <Button disabled={page===2} onClick={()=>setPage(page+1)}>Next</Button>
            </Box>
            </Grid>
          </Box>
          
        </Flex>
      </Box>
      
    </Box>
  )
}

export default PopUps