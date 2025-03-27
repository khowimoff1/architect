import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
const Swiperr = ({images,classs}) => {
  console.log(classs)     
  const swiperRef = useRef(null);
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
        {images?.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center h-full">
            <img
              src={item}
              alt="slide"
              className={`object-cover w-full ${classs}`}
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
