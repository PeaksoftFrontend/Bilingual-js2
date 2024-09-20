import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

export const Slider = ({ children, onSlideChange, onSwiperReady }) => {
  const swiperRef = useRef(null);
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        if (onSwiperReady) onSwiperReady(swiperRef);
      }}
      spaceBetween={30}
      slidesPerView={2}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      onSlideChange={onSlideChange}
      modules={[Autoplay, Navigation]}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
