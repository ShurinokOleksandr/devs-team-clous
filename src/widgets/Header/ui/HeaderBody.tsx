import { VStack, Button, Flex, Text, Box } from '@chakra-ui/react';
import {  useTransform, useScroll, motion } from 'framer-motion';
import React from 'react';


export const HeaderBody = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, -1]);
	return (
		<Flex
			align={['center','start','start','end','end','end']}
			direction={{base:'column',lg:'row'}}
			height={{base:'550px',md:'full'}}
			justify={{base:"end",lg:'start'}}
			mt={{base:"60px",md:0}}
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
	);
};
