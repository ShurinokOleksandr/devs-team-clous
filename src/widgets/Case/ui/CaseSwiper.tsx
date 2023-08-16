import {UnorderedList, Container, ListItem, Divider, HStack, Center, Image, Text, Box} from "@chakra-ui/react";
import {ReactComponent as Arrow} from "src/shared/assets/arrow-right.svg";
import AboutImg from "src/shared/assets/result.jpg";
import {SwiperSlide, Swiper} from 'swiper/react';
import React, {useState, useRef} from 'react';
import {Swiper as SwiperType} from 'swiper';
import 'swiper/css';

export  const CaseSwiper = () => {
	const [isEnd,setIsEnd] = useState(false)
	const [isStart,setIsStart] = useState(true)

	const swiperRef = useRef<SwiperType>();
	const onChangeSlide = (value:SwiperType) => {
		setIsEnd(value.isEnd)
		setIsStart(value.isBeginning)
	}
	return (
		<div>
			<Swiper
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				onActiveIndexChange={(value) => onChangeSlide(value)}
			>
				<SwiperSlide>
					<Container  maxWidth={"container.xl"} fontFamily={'Exo_2'} my={'60px'} px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap={'30px'}   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize={'20px'}>
									Результати
								</Text>
								<UnorderedList color={'lightGray'} pl={'20px'}>
									<ListItem my={'25px'}>Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
				<SwiperSlide>
					<Container  maxWidth={"container.xl"} fontFamily={'Exo_2'} my={'60px'} px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap={'30px'}   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize={'20px'}>
									Результати
								</Text>
								<UnorderedList color={'lightGray'} pl={'20px'}>
									<ListItem my={'25px'}>Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
				<SwiperSlide>
					<Container  maxWidth={"container.xl"} fontFamily={'Exo_2'} my={'60px'} px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap={'30px'}   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize={'20px'}>
									Результати
								</Text>
								<UnorderedList color={'lightGray'} pl={'20px'}>
									<ListItem my={'25px'}>Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
				<SwiperSlide>
					<Container  maxWidth={"container.xl"} fontFamily={'Exo_2'} my={'60px'} px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap={'30px'}   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize={'20px'}>
									Результати
								</Text>
								<UnorderedList color={'lightGray'} pl={'20px'}>
									<ListItem my={'25px'}>Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my={'25px'}>Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
			</Swiper>
			<Center columnGap={10}>
				<Arrow onClick={() => swiperRef.current?.slidePrev()} opacity={isStart ? '15%' :  '100%'} transform="scale(-1, 1)" height={'24px'} width={'24px'}/>
				<Arrow onClick={() => swiperRef.current?.slideNext()} opacity={isEnd ? '15%' :  '100%'}   height={'24px'} width={'24px'}/>
			</Center>
		</div>
	);
};
