import { VStack, Button, Text, Flex, Box } from '@chakra-ui/react';
import { useTransform, useScroll, motion } from 'framer-motion';
import React from 'react';

export const HeaderNavbar = () => {
	const { scrollY, scrollX } = useScroll();
	const posY = useTransform(scrollY, [0, 500], [ '-50vh','0vh']);
	const posX = useTransform(scrollX, [0, 200],  [ '0vh','50vh']);
	return (
		<Box     >
			<Flex flexDirection="column" justifyContent="end" >
				
				<Flex
					align={['center','start','start','end','end','end']}
					direction={{base:'column',lg:'row'}}
					justify={{base:"end",lg:'start'}}
					height={[450,620,750,750,]}
				 
					whileInView='visible'
					initial='hidden'
					as={motion.div}
				>
					<VStack  display="flex" align="start" zIndex={1001}>
						<Text
							fontSize={{base:"14px",lg:"20px"}}
							position="relative"
							fontWeight="medium"
							fontFamily="Exo 2"
							as={motion.p}
							opacity="60%"
							left="90px"
							mb='500px'
							w="600px"
						>
							Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.
						</Text>
					</VStack>
					<Box width="full" mb="115px">
						<Button  >
							<Text  >
								Зв'язатися з нами
							</Text>
						</Button>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};
