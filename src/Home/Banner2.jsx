import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from '../../public/images/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.webp'
import slider2 from '../../public/images/colorful-portrait-woman-with-rainbow-hair_912214-556.avif'
import slider3 from '../../public/images/portrait-painting-beautiful-woman-multicolored-tones-abstract-picture-beautiful-girl_769803-3.avif'
import slider4 from '../../public/images/wonderland-girl-generated-by-Fotor-ai-art-generator_2023-05-15-104543_ibow.webp'

const Banner2 = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={slider1} alt="" className="h-96 w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider2} alt="" className="h-96 w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider3} alt="" className="h-96 w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider4} alt="" className="h-96 w-full" /></SwiperSlide>
      
      ....
    </Swiper>
  );
};

export default Banner2;
