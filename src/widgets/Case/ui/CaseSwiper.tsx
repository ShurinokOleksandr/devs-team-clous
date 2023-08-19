import { UnorderedList, Container, ListItem, Divider, HStack, Center, Image, Text, Box } from '@chakra-ui/react';
import { useChangeSwiperSlide } from 'src/shared/lib/hooks/useChangeSwiperSlide';
import { ReactComponent as Arrow } from 'src/shared/assets/arrow-right.svg';
import { useSwiperClick } from 'src/shared/lib/hooks/useSwiperClick';
import AboutImg from 'src/shared/assets/result.jpg';
import { SwiperSlide, Swiper } from 'swiper/react';
import React from 'react';
import 'swiper/css';






export  const CaseSwiper = () => {
	const { onChangeSlide,isStart,isEnd} = useSwiperClick()
	const  {clickNext,clickPrev,swiperRef} = useChangeSwiperSlide()
	return (
		<>
			<Swiper
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				onActiveIndexChange={(value) => onChangeSlide(value)}
			>
				<SwiperSlide>
					<Container  maxWidth="container.xl" fontFamily="Exo 2" my="60px" px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap="30px"   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text
									textTransform="uppercase"
									fontSize="20px"
								
								>
									Результати
								</Text>
								<UnorderedList color="lightGray" pl="20px">
									<ListItem
										lineHeight="28px"
										my="25px"
									>
										Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.
									</ListItem>
									<Divider />
									<ListItem
										lineHeight="28px"
										my="25px"
									>
										Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.
									</ListItem>
									<Divider />
									<ListItem
										lineHeight="28px"
										my="25px"
									>
										Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.
									</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
				<SwiperSlide>
					<Container  maxWidth="container.xl" fontFamily="Exo 2" my="60px" px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap="30px"   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize="20px">
									Результати
								</Text>
								<UnorderedList color="lightGray" pl="20px">
									<ListItem my="25px">Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.</ListItem>
									<Divider />
									<ListItem my="25px">Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my="25px">Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
				<SwiperSlide>
					<Container  maxWidth="container.xl" fontFamily="Exo 2" my="60px" px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap="30px"   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize="20px">
									Результати
								</Text>
								<UnorderedList color="lightGray" pl="20px">
									<ListItem my="25px">Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.</ListItem>
									<Divider />
									<ListItem my="25px">Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my="25px">Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
				<SwiperSlide>
					<Container  maxWidth="container.xl" fontFamily="Exo 2" my="60px" px={0} >
						<HStack flexDirection={{ xl: 'row-reverse', base: "column" }} align={{base:'start',xl:'center'}}   columnGap="30px"   >
							<Box  width={{basa:'70%',xl:'55%'}}>
								<Text fontSize="20px">
									Результати
								</Text>
								<UnorderedList  color="lightGray" pl="20px">
									<ListItem fontFamily="Exo 2" my="25px">
										<Text fontFamily="Exo 2">
											Збільшення частоти позитивних згадок про бренд в соціальних мережах та ЗМІ.
										</Text>
									</ListItem>
									<Divider />
									<ListItem my="25px">Час відгуку на негативні згадки скоротився з 48 годин до менше 6 годин.</ListItem>
									<Divider />
									<ListItem my="25px">Зниження кількості негативних коментарів на 30% протягом перших двох місяців співпраці.</ListItem>
								</UnorderedList>
							</Box>
							<Image src={AboutImg} />
						</HStack>
					</Container>
				</SwiperSlide>
			</Swiper>
			<Center columnGap={10}>
				<Arrow opacity={isStart ? '15%' :  '100%'} onClick={() => clickPrev()} transform="scale(-1, 1)" stroke="white" height="24px" width="24px"/>
				<Arrow opacity={isEnd ? '15%' :  '100%'} onClick={() => clickNext()}   stroke="white" height="24px" width="24px"/>
			</Center>
		</>
	);
};
