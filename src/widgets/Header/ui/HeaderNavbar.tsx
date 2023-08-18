import { Button, VStack, Image, List, Flex, Text, Box } from '@chakra-ui/react';
import { useTransform, useScroll, motion } from 'framer-motion';
import {DrawerLinks} from "src/entities/Drawer";
import {NavLinks} from "src/entities/NavLinks";
import BgImg from "src/shared/assets/bg.jpg";
import {Lang} from "src/features/Lang";
import React from 'react';

export const HeaderNavbar = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, -1]);
	return (
		<Box     >
			<Flex flexDirection="column" justifyContent="end" >
				<Flex justifyContent={{base:'space-between',lg:'end' }} position="sticky" align="center" bgColor="gray"  display="flex" zIndex={11110} h="50px" top='0'>
					<List   width={{base:'100px',lg:'652px'}}  marginX={{lg:'auto' ,base:0 }} >
						<Flex display={{base:'none',lg:"flex"}} justify="space-between" >
							<NavLinks />
						</Flex>
						<DrawerLinks />
					</List>
					<Lang />
				</Flex>
				<Flex
					align={['center','start','start','end','end','end']}
					height={[450,620,750,750,800,830,870]}
					direction={{base:'column',lg:'row'}}
					justify={{base:"end",lg:'start'}}
				 
					whileInView='visible'
					initial='hidden'
					as={motion.div}
				>
					<VStack align="start" zIndex={111}>
						<Text
							fontSize={{base:"14px",lg:"20px"}}
							fontWeight="medium"
							fontFamily="Exo 2"
							color="lightGray"
							opacity="60%"
							as={motion.p}
						>
							Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.
						</Text>
						<Text
							fontSize={['50px','100px','160px','360px','460px']}
							fontWeight="medium"
							letterSpacing={31}
							lineHeight="none"
							fontFamily="DAMN"
							//@ts-ignore
							style={{scale}}
							as={motion.p}
							color="blue"
						>
							OSINT
						</Text>
					</VStack>
					<Box width="full" mb="115px">
						<Button width="full" >
							<Text  >
								Зв'язатися з нами
							</Text>
						</Button>
					</Box>
				</Flex>
				{/*<VStack align="start" zIndex={111}>*/}
				{/*	<Text*/}
				{/*		fontSize={{base:"14px",lg:"20px"}}*/}
				{/*		fontWeight="medium"*/}
				{/*		fontFamily="Exo 2"*/}
				{/*		color="lightGray"*/}
				{/*		opacity="60%"*/}
				{/*		as={motion.p}*/}
				{/*	>*/}
				{/*		Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.*/}
				{/*	</Text>*/}
				{/*	<Text*/}
				{/*		fontSize={['50px','100px','160px','360px','460px']}*/}
				{/*		fontWeight="medium"*/}
				{/*		letterSpacing={31}*/}
				{/*		lineHeight="none"*/}
				{/*		fontFamily="DAMN"*/}
				{/*		//@ts-ignore*/}
				{/*		style={{scale}}*/}
				{/*		as={motion.p}*/}
				{/*		color="blue"*/}
				{/*	>*/}
				{/*		OSINT*/}
				{/*	</Text>*/}
				{/*</VStack>*/}
				
			</Flex>
			
			
			
			
			
			
		</Box>
	);
};
