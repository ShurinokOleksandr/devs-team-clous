import { ChakraProps, Text } from '@chakra-ui/react';
import React from 'react';
interface TitleType  extends ChakraProps{
	text:string
}
export const Title = ({width,text,...props}:TitleType) => {
	return (
		<Text
			{...props}
			width={width || {base:'full',xl:'434px'}}
			fontSize={{base:'35px',lg:'44px'}}
			textTransform="uppercase"
			letterSpacing="0.03em"
			lineHeight="32px"
			fontFamily="DAMN"
			color='#282828'
		>
			{text}
		</Text>
	);
};


