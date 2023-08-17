import { useTransform, useScroll, motion } from 'framer-motion';
import {Button, Text, Flex, Box} from "@chakra-ui/react";
import React from 'react';
const textAnimation = {
	hidden:{
		opacity:0,
		x:-100
	},
	visible:{
		opacity: 1,
		x:0
	}
}
export const HeaderBody = () => {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0, 1], [1, -2]);
	
	return (
		<Flex
			align={['center','start','start','end','end','end']}
			direction={['column','column','column','row']}
			justify={['end','end','end','start']}
			mt={['60px',0,0,0,0]}
			whileInView='visible'
			initial='hidden'
			as={motion.div}
			height="full"
		>
			<Box zIndex={111}>
				<Text
					fontSize={{base:"14px",lg:"20px"}}
					fontWeight="medium"
					fontFamily="Exo 2"
					color="lightGray"
					opacity="60%"
					as={motion.p}
					ml="10px"
				>
					Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.
				</Text>
				<Text
					fontSize={['50px','100px','160px','360px','460px']}
					verticalAlign="bottom"
					//@ts-ignore
					style={{ scale: x }}
					fontWeight="medium"
					letterSpacing={31}
					lineHeight="none"
					fontFamily="DAMN"
					as={motion.p}
					color="blue"
				>
					OSINT
				</Text>
			</Box>
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

