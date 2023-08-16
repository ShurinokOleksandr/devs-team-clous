import {ReactComponent as Play} from 'src/shared/assets/play-button-arrowhead 1.svg'
import {Container, HStack, Center, Button, Text, Box} from "@chakra-ui/react";
import VideoImg from "src/shared/assets/form.jpg";
import React from 'react';

export const MainVideoSection = () => {
	return (
		<Container maxWidth={"container.xl"} px={[9,9,9,9,9,0]} py={'100px'}>
			<Box>
				<Text
					fontFamily={'damn'}
					fontSize={'70px'}

				>
					Про
					<Text color={'blue'} as={'span'} ml={3}>
						OSINT
					</Text>
				</Text>
			</Box>
			<HStack flexDirection={{ base: "column", lg: "row" }}  columnGap={20}>
				<Text  width={{base:'full',lg:'625px'}}>
					OSINT - це процес збору, аналізу та інтерпретації публічної інформації, що доступна відкритою формою. Це охоплює дані з різних джерел: соціальних мереж, новин, форумів, веб-сайтів, блогів та багатьох інших джерел.
					Наші послуги OSINT створені з урахуванням вашого комфорту та потреб.
				</Text>
				<Text  width={{base:'full',lg:'625px'}}>
					Ми забезпечуємо високоточний та доступний доступ до інформації, що допоможе вам зробити обґрунтовані та вдалих рішень. Наша команда експертів з OSINT завжди готова допомогти вам знаходити ключові дані та аналізувати їх для досягнення вашої мети.
				</Text>
			</HStack>
			<Center
				flexDirection={'column'}
				bgRepeat={'no-repeat'}
				bgPosition={'center'}
				objectFit={'cover'}
				bgImage={VideoImg}
				bgSize={'cover'}
				rowGap={'20px'}
				mt={'30px'}
				h={'558px'}
				w={'full'}

			>
				<Text
					fontSize={'20px'}
					color={'white'}
				>
					ДИВІТЬСЯ ВІДЕО, ЯК ЦЕ ПРАЦЮЄ
				</Text>
				<Button rounded={'full'} h={'78px'} w={'78px'}>
					<Play width={'20px'} />
				</Button>
			</Center>
		</Container>
	);
};


