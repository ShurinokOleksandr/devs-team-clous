import { Container, VStack, HStack, Image, Text, Box } from '@chakra-ui/react';
import { MainAboutFirstSectionType } from 'src/shared/types/MainTextAbout';
import { Title } from 'src/shared/ui';
import React from 'react';



export const MainAboutFirstSection = ({
	                                      secondParagraph,
	                                      firstParagraph,
	                                      secondTitle ,
	                                      firstTitle,
	                                      image,
	                                      row
                                      }:MainAboutFirstSectionType) => {
	return (
		<Container maxWidth="container.xl"  px={0} >
			<HStack flexDirection={{ base: "column", xl: row }}  columnGap="96px"  mb="70px"  >
				<VStack width={{ base: 'full', xl: '450px' }} rowGap="60px" >
					<Box>
						<Title
							text={firstTitle}
							mb="10px"
						/>
						<Text
							fontFamily="Exo 2"
							lineHeight="28px"
							fontSize="16px"
							color="#1E1E1E"
						>
							{firstParagraph}
						</Text>
					</Box>
					<Box>
						<Title text={secondTitle} mb="10px"/>
						<Text
							fontFamily="Exo 2"
							lineHeight="28px"
							color="titleMain"
							fontSize="16px"
						>
							{secondParagraph}
						</Text>
					</Box>
				</VStack>
				
				<Image objectFit='cover' src={image}    />
			</HStack>
		</Container>
	);
};



