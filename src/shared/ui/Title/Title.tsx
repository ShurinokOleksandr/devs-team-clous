import { ChakraProps, Text } from '@chakra-ui/react';
import React from 'react';
interface TitleType  extends ChakraProps{
	text:string
}
export const Title = ({text}:TitleType) => {
	return (
		<Text
			fontSize={{base:'35px',lg:'44px'}}
			width={{base:'full',xl:'400px'}}
			textTransform="uppercase"
			fontFamily="DAMN"
		>
			{text}
		</Text>
	);
};

