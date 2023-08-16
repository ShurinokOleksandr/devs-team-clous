import {Text} from "@chakra-ui/react";
import React from 'react';

export const Title = ({text}:{text:string}) => {
	return (
		<Text
		fontSize={{base:'35px',lg:'44px'}}
		width={{base:'full',xl:'400px'}}
		textTransform={'uppercase'}
		fontFamily={'damn'}
		>
			{text}
		</Text>
	);
};

