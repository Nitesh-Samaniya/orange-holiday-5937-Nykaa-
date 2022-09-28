import {Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../Images/Slider2/slider2_img1.png";
import img2 from "../../Images/Slider2/slider2_img2.png";


const slides = [
    {
        image: img1
    },
    {
        image: img2
    }
  ];

const ImageSlider2 = () => {
    return (
      <Box w="100%" p={4} color="white">
        <Carousel autoPlay infiniteLoop>
          {slides.map((el) => {
            return <Image src={el.image} height="auto" width="800px" />;
          })}
        </Carousel>
      </Box>
    );
  };
  
  
  export default ImageSlider2;