'use client';

import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import CircleImage from '@/components/circle-image';
import TransitionPage from '@/components/transition-page';

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos comentarios
          <span className="block font-bold text-secondary">
            {' '}
            de nuestros clientes
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            ></Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
