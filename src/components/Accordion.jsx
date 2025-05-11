import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Accordion({ accordionCount, image }) {
  let count = new Array(accordionCount).fill(null);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {count.map(function (e, i) {
          return <SwiperSlide key={i}>
            <img className='w-full max-h-[320px] object-cover' src={image[i].src} alt="" />
          </SwiperSlide>
        })}

      </Swiper>
    </>
  );
}
