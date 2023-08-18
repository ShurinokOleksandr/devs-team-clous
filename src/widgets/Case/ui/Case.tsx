import {Container, Text, Box} from "@chakra-ui/react";
import React from 'react';

import {CaseSwiper} from "./CaseSwiper";

export const Case = () => {
	return (
		<Box userSelect="none" bgColor="black" color="white"  >
			<Container px={{base:'50px',xl:'0'}} maxWidth="container.xl" py="60px">
				<Text fontFamily="DAMN" fontSize="70px">
					Кейси
				</Text>
				<Box w={{base:'full',lg:'650px'}}>
					<Text fontSize={{base:'30px',sm:'35px',lg:'44px'}} fontFamily="DAMN">
						Репутаційний Моніторинг Впливового Бренду
					</Text>
					<Text fontFamily="Exo 2" opacity={0.5}>
						Наша компанія співпрацювала з впливовим світовим брендом, який прагнув зберігати позитивну репутацію та ефективно реагувати на відгуки клієнтів.
					</Text>
				</Box>
				<CaseSwiper />
			</Container>
		</Box>
	);
};

