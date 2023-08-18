import { Button, VStack, Image, Text, Flex, Box } from '@chakra-ui/react';
import {  useTransform, useScroll, motion } from 'framer-motion';
import BgImg from 'src/shared/assets/bg.jpg';
import React from 'react';


export const HeaderBody = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, -1]);
	return (
		<Flex
			// align={['center','start','start','end','end','end']}
			// direction={{base:'column',lg:'row'}}
			// height={{base:'550px',md:'full'}}
			// justify={{base:"end",lg:'start'}}
			// mt={{base:"60px",md:0}}
			
		>
		
		
		</Flex>
	);
};
