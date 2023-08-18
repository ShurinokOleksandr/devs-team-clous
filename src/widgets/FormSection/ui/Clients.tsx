import { useChangeSwiperSlide } from 'src/shared/lib/hooks/useChangeSwiperSlide';
import { ReactComponent as Arrow } from 'src/shared/assets/arrow-right.svg';
import { Center, HStack, Image, Flex, Text, Box } from '@chakra-ui/react';
import { useSwiperClick } from 'src/shared/lib/hooks/useSwiperClick';
import SliderImg from 'src/shared/assets/sliderImg.jpg';
import { SwiperSlide, Swiper } from 'swiper/react';
import React from 'react';
import 'swiper/css';

export const Clients = () => {
    const { onChangeSlide,isStart,isEnd} = useSwiperClick()
    const  {clickNext,clickPrev,swiperRef} = useChangeSwiperSlide()
    
    
    
    return (
        <Box userSelect="none">
            <HStack justify="space-between" px={5}>
                <Text
                    fontFamily="DAMN"
                    fontSize="70px"
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
            <Center px="1.6vw">
                <Swiper
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            
                        },
                        570: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1200:{
                            slidesPerView: 4,
                            spaceBetween: 30,
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
                    spaceBetween={10}
                    slidesPerView={4}
                    
                >
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide style={{padding:'4px'}}>
                        <Box height='125px' shadow="base" px="70px" w="300px" py="50px">
                            <Image src={SliderImg} />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Center>
            
        </Box>
    );
};

