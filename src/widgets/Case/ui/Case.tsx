import {Container, Text, Box} from "@chakra-ui/react";
import React from 'react';

import {CaseSwiper} from "./CaseSwiper";

export const Case = () => {
	return (
		<Box userSelect="none" bgColor="black" color="white"  >
			<Container px={{base:'50px',xl:'0'}} maxWidth="container.xl" py="60px">
				<Text
					fontSize={{ base:'50px',md:'70px' }}
					textTransform="uppercase"
					letterSpacing="0.03em"
					fontFamily="DAMN"
					lineHeight="77px"
					mb="40px"
				>
					Кейси
				</Text>
				<Box w={{base:'full',lg:'650px'}}>
					<Text
						fontSize={{base:'30px',sm:'35px',lg:'44px'}}
						textTransform="uppercase"
						fontFamily="DAMN"
						lineHeight="52px"
						mb="10px"
					>
						Репутаційний Моніторинг Впливового Бренду
					</Text>
					<Text w={{base:'full',  lg:'734px' }} fontFamily="Exo 2" lineHeight="28px" opacity={0.6}>
						Наша компанія співпрацювала з впливовим світовим брендом, який прагнув зберігати позитивну репутацію та ефективно реагувати на відгуки клієнтів.
					</Text>
				</Box>
				<CaseSwiper />
			</Container>
		</Box>
	);
};










