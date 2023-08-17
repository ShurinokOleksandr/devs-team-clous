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
		<Container maxWidth="container.xl" my="60px" px={0} >
			<HStack flexDirection={{ base: "column", xl: row }}  columnGap={20}   >
				<VStack width={{ base: 'full', xl: '55%' }} rowGap="60px">
					<Box>
						<Title text={firstTitle} />
						<Text
							fontFamily="Exo 2"
						>
							{firstParagraph}
						</Text>
					</Box>
					<Box>
						<Title text={secondTitle} />
						<Text
							fontFamily="Exo 2"
						>
							{secondParagraph}
						</Text>
					</Box>
				</VStack>
				<Image objectFit='cover' src={image}   w="full" />
			</HStack>
		</Container>
	);
};

