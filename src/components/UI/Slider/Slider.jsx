import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

export const Slider = ({ data, renderSlide, renderPagination }) => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        loop={true}
        modules={[Autoplay, Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>

      {renderPagination({
        handlePrev,
        handleNext,
        index,
        data,
      })}
    </div>
  );
};
