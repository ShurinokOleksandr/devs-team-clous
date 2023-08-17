import { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';

export const useSwiperClick = () =>{
    const [isEnd,setIsEnd] = useState(false)
    const [isStart,setIsStart] = useState(true)
    const onChangeSlide = (value:SwiperType) => {
        setIsEnd(value.isEnd)
        setIsStart(value.isBeginning)
    }
    return {
        onChangeSlide,
        isStart,
        isEnd
    }
}
