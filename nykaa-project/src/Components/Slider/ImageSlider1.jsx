import {Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../Images/slider1/slider1_img1.png";
import img2 from "../../Images/slider1/slider1_img2.png";
import img3 from "../../Images/slider1/slider1_img3.png";
import img4 from "../../Images/slider1/slider1_img4.png";
import img5 from "../../Images/slider1/slider1_img5.png";
import img6 from "../../Images/slider1/slider1_img6.png";
import img7 from "../../Images/slider1/slider1_img7.png";


const slides = [
    {
      image: img1
    },
    {
      image: img2
    },
    {
        image: img3
    },
    {
        image: img4
    },
    {
        image: img5
    },
    {
        image: img6
    },
    {
        image: img7
    }
  ];
const ImageSlider1 = () => {
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
  
  
  export default ImageSlider1;