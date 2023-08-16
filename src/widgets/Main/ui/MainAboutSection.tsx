import {Container, HStack} from "@chakra-ui/react";
import React from 'react';

interface MainAboutFirstSectionType {
	row?:'row-reverse' | 'row',
	children:React.ReactNode
}

export const MainAboutFirstSection = ({row = 'row',children}:MainAboutFirstSectionType) => {
	return (
		<Container maxWidth={"container.xl"} px={[9,9,9,9,9,0]} my={'60px'} >
			<HStack flexDirection={{ base: "column", xl: row }}  columnGap={20}   >
				{children}
			</HStack>
		</Container>
	);
};

