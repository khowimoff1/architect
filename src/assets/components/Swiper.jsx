import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
const Swiperr = () => {
  const swiperRef = useRef(null);
  const images = [
    "https://optim.tildacdn.com/tild3263-3131-4637-a538-353665316536/-/resize/600x400/-/format/webp/1e0a80ac-5f2b-41e0-9.jpeg.webp",
    "https://optim.tildacdn.com/tild6233-6639-4262-b065-636361643062/-/resize/600x400/-/format/webp/556de6ac-a22c-49b5-8.jpeg.webp",
    "https://optim.tildacdn.com/tild6366-6233-4632-b637-666330303637/-/resize/600x400/-/format/webp/46393b97-1d34-4b07-b.jpeg.webp",
    "https://optim.tildacdn.com/tild3831-3164-4465-a438-616362616662/-/resize/600x400/-/format/webp/b229063f-b112-4931-9.jpeg.webp",
  ];
  return (
    <div className="relative w-full">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute flex left-5 z-10 text-gray-900 bg-gray-100 rounded-full items-center justify-center w-[40px] h-[40px] -translate-y-1/2 top-1/2"
      >
        <svg
          className={`t-null__slds-arrow t-null__slds-arrow_1`}
          width={35}
          height={35}
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55 68L34 47L55 26"
            stroke={"black"}
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: 1 }}
          />
        </svg>
      </button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation]}
        className="w-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <img
              src={item}
              alt="slide"
              className="object-cover w-full h-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-5 z-10 text-gray-900 -translate-y-1/2 bg-gray-100 rounded-full top-1/2 w-[40px] h-[40px] flex items-center justify-center"
      >
        <svg
          className={`t-null__slds-arrow t-null__slds-arrow_1 `}
          width={35}
          height={35}
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 68L60 47L39 26"
            stroke={"black"}
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: 1 }}
          />
        </svg>
      </button>
    </div>
  );
};

export default Swiperr;
