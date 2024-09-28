import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

export const Slider = ({
  data,
  renderSlide,
  renderPagination,
  spaceBetween,
  slidesPerView,
  className,
  ...props
}) => {
  const [index, setIndex] = useState(0); // Track active slide
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div className={className ? `${className}` : ""}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)} // Track current slide index
        loop={true} // Enable loop to avoid the shadow issue
        modules={[Autoplay, Navigation]}
        {...props}
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id}>
            {renderSlide(item, i, index)} {/* Pass the active index here */}
          </SwiperSlide>
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
