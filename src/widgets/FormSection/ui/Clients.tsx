import { useChangeSwiperSlide } from 'src/shared/lib/hooks/useChangeSwiperSlide';
import { ReactComponent as Arrow } from 'src/shared/assets/arrow-right.svg';
import { useSwiperClick } from 'src/shared/lib/hooks/useSwiperClick';
import { Center, HStack, Flex, Text, Box } from '@chakra-ui/react';
import SliderImg from 'src/shared/assets/sliderImg.jpg';
import { SwiperSlide, Swiper } from 'swiper/react';
import Image from 'react-image-webp';
import React from 'react';
import 'swiper/css';

export const Clients = () => {
    
    const { onChangeSlide,isStart,isEnd} = useSwiperClick()
    
    const  {clickNext,clickPrev,swiperRef} = useChangeSwiperSlide()
    
    return (
        <Box userSelect="none">
            <HStack justify="space-between" px={{ base:4,xl:1 }}>
                <Text
                    fontSize={{ base:'60px',md:"70px" }}
                    fontFamily="DAMN"
                >
                    Нашi кліенти
                </Text>
                <Flex gap={2}>
                    <Arrow
                        opacity={isStart ? '15%' :  '100%'}
                        onClick={() =>clickPrev() }
                        transform="scale(-1, 1)"
                        stroke="black"
                        height="24px"
                        width="24px"
                    />
                    <Arrow
                        opacity={isEnd ? '15%' :  '100%'}
                        onClick={() => clickNext()}
                        stroke="black"
                        height="24px"
                        width="24px"
                    />
                </Flex>
            </HStack>
            <Center px={{ base:'5vw', xl:'0' }}>
                <Swiper
                    breakpoints={{
                        910: {
                            slidesPerView: 2.6,
                            spaceBetween: 20,
                        },
                        801: {
                            slidesPerView: 2.3,
                            spaceBetween: 10,
                        },
                        1200:{
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                        },
                        550:{
                            slidesPerView: 1.6,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1285:{
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        675:{
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        520:{
                            slidesPerView: 1.5,
                            
                        },
                        419:{
                            slidesPerView: 1.2,
                            
                        },
                        0:{
                            slidesPerView: 1,
                        }
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onActiveIndexChange={(value) => onChangeSlide(value)}
                    className="mySwiper"
                >
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image webp={SliderImg} src={SliderImg} alt="alt" />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Center>
        </Box>
    );
};

