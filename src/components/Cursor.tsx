'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Banner1 from '../assests/banner.jpg'
import Banner2 from '../assests/Gray Minimalist New Collection Banner.jpg'
import Banner3 from '../assests/Gray Minimalist New Collection Banner (1).jpg'
import Banner4 from '../assests/Gray Minimalist New Collection Banner (2).jpg'
import Image from "next/image";
import { motion } from "framer-motion";
const Cursor = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.6}}
    >
      
        <Carousel className="z-10">
          <CarouselContent>
            <CarouselItem>
                {/* <img src={Banner1} alt="banner1" className="w-full object-cover" /> */}
                <Image src={Banner1} alt="banner1" className="w-full object-cover"/>
            </CarouselItem>
            <CarouselItem>
                <Image src={Banner2} alt="banner2" className="w-full object-cover"/>
            </CarouselItem>
            <CarouselItem> 
                <Image src={Banner3} alt="banner3" className="w-full object-cover"/>
            </CarouselItem>
            <CarouselItem> 
                <Image src={Banner4} alt="banner3" className="w-full object-cover"/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-5"/>
          <CarouselNext className="absolute top-1/2 right-5"/>
        </Carousel>
    </motion.div>
  );
};

export default Cursor;
