import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';

export  const useChangeSwiperSlide = () => {
    const swiperRef = useRef<SwiperType>();
    const clickNext = () =>  swiperRef.current?.slideNext()
    const clickPrev =  () =>  swiperRef.current?.slidePrev()
    return {clickNext,clickPrev,swiperRef}
}
