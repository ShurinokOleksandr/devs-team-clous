import {ReactComponent as Play} from 'src/shared/assets/play-button-arrowhead 1.svg'
import {Container, HStack, Center, Button, Text, Box} from "@chakra-ui/react";
import VideoImg from "src/shared/assets/form.jpg";
import React from 'react';

export const MainVideoSection = () => {
	return (
		<Container maxWidth="container.xl" py="100px" px={0} >
			<Box>
				<Text
					textTransform="uppercase"
					fontFamily="DAMN"
					fontSize="70px"
				>
					Про
					<Text color="blue" as="span" ml={3}>
						OSINT
					</Text>
				</Text>
			</Box>
			<HStack flexDirection={{ base: "column", lg: "row" }}  columnGap={20}>
				<Text width={{base:'full',lg:'625px'}}  color="titleMain" lineHeight="28px">
					OSINT - це процес збору, аналізу та інтерпретації публічної інформації, що доступна відкритою формою. Це охоплює дані з різних джерел: соціальних мереж, новин, форумів, веб-сайтів, блогів та багатьох інших джерел.
					Наші послуги OSINT створені з урахуванням вашого комфорту та потреб.
				</Text>
				<Text  width={{base:'full',lg:'625px'}} color="titleMain" lineHeight="28px">
					Ми забезпечуємо високоточний та доступний доступ до інформації, що допоможе вам зробити обґрунтовані та вдалих рішень. Наша команда експертів з OSINT завжди готова допомогти вам знаходити ключові дані та аналізувати їх для досягнення вашої мети.
				</Text>
			</HStack>
			<Center
				flexDirection="column"
				bgRepeat="no-repeat"
				bgPosition="center"
				bgImage={VideoImg}
				bgSize="cover"
				rowGap="20px"
				mt="30px"
				h="558px"
				w="full"
			>
				<Text
					fontSize={{base:'15px',lg:'20px'}}
					color="white"
				>
					ДИВІТЬСЯ ВІДЕО, ЯК ЦЕ ПРАЦЮЄ
				</Text>
				<Button
					onClick={() => alert('А відео нема!')}
					aria-labelledby="labeldiv"
					aria-label="Name"
					rounded="full"
					name="playBtn"
					title="Title"
					w="78px"
					h="78px"
					id="al"
				>
					<Play width="20px" />
				</Button>
			</Center>
		</Container>
	);
};


