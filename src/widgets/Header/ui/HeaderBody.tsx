import {Button, Text, Flex, Box} from "@chakra-ui/react";
import React from 'react';

export const HeaderBody = () => {
	return (
		<Flex
			align={['center','start','start','end','end','end']}
			direction={['column','column','column','row']}
			justify={['end','end','end','start']}
			mt={['60px',0,0,0,0]}
			height={'full'}
		>
			<Box zIndex={111}>
				<Text
					fontSize={['13px','14px','15px','20px','20px']}
					fontWeight={"medium"}
					fontFamily={'Exo_2'}
					color={'lightGray'}
					lineHeight={'16px'}
				>
					Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.
				</Text>
				<Text
					fontSize={['50px','100px','160px','360px','460px']}
					verticalAlign={'bottom'}
					fontWeight={"medium"}
					lineHeight={"none"}
					fontFamily={'damn'}
					letterSpacing={31}
					color={'blue'}
					as={'h1'}
				>
					OSINT
				</Text>
			</Box>
			<Box width={'full'} mb={'115px'}>
				<Button width={'full'}>
					Зв'язатися з нами
				</Button>
			</Box>
		</Flex>
	);
};

