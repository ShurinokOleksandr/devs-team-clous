import {CaseSwiper} from "src/widgets/Case/ui/CaseSwiper";
import {Container, Text, Box} from "@chakra-ui/react";
import React from 'react';

export const Case = () => {
	return (
		<Box bgColor={'black'} color={'white'}  >
			<Container px={{base:'50px',xl:'0'}} maxWidth={'container.xl'} pt={'60px'}>
				<Text fontFamily={'damn'} fontSize={'70px'}>
					Кейси
				</Text>
				<Box w={{base:'full',lg:'650px'}}>
					<Text fontSize={{base:'30px',sm:'35px',lg:'44px'}} fontFamily={'damn'}>
						Репутаційний Моніторинг Впливового Бренду
					</Text>
					<Text fontFamily={'Exo_2'} opacity={0.5}>
						Наша компанія співпрацювала з впливовим світовим брендом, який прагнув зберігати позитивну репутацію та ефективно реагувати на відгуки клієнтів.
					</Text>
				</Box>
				<CaseSwiper />
			</Container>
		</Box>
	);
};

