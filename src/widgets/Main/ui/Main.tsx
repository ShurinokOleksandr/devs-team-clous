import {MainAboutFirstSection} from "src/widgets/Main/ui/MainAboutSection";
import {Container, VStack, Image, Text, Box} from "@chakra-ui/react";
import AboutImg from "src/shared/assets/aboutOsmit.jpg";
import Analyzed from "src/shared/assets/analyz.jpg";
import Risks from "src/shared/assets/risks.jpg";
import {Title} from "src/shared/ui";
import React from 'react';

import {MainVideoSection} from "./MainVideoSection";

export const Main = () => {
	return (
		<Container maxWidth={"container.xl"} px={[9,9,9,9,9,0]}>
			<MainVideoSection />
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
			<MainAboutFirstSection >
				<VStack  width={{base:'full',xl:'55%'}} rowGap={'60px'}>
					<Box>
						<Title text={'Пошук та Моніторинг Інформації'} />
						<Text
							fontFamily={'Exo_2'}
						>
							Ми забезпечуємо широкий спектр інструментів для ефективного збору та моніторингу відкритої інформації. Виявляйте новини, соціальні медіа-записи, форуми, відгуки про продукти та багато іншого. Зручна панель керування допомагає контролювати історію запитів та розподілити завдання між своєю командою.
						</Text>
					</Box>
					<Box>
						<Title text={'Аналіз Соціальних Мереж'} />
						<Text
							fontFamily={'Exo_2'}
						>
							Наші інструменти дозволяють глибоко аналізувати соціальні мережі, щоб виявити тенденції, думки та настрої користувачів. Слідкуйте за ключовими особистостями, марками або подіями, а також отримуйте розширені звіти для прийняття стратегічних рішень.
						</Text>
					</Box>
				</VStack>
				<Image src={AboutImg} />
			</MainAboutFirstSection>
			<MainAboutFirstSection row={'row-reverse'} >
				<VStack  width={{base:'full',xl:'55%'}} rowGap={'60px'}>
					<Box>
						<Title text={'Конкурентний Аналіз'} />
						<Text
							fontFamily={'Exo_2'}
						>
							Наші послуги допомагають збирати інформацію про конкурентів: ціноутворення, маркетингові акції, новини та інші діяльності. Отримавши детальний аналіз, ви можете розробити унікальні стратегії, які підсилять ваше конкурентне перевагу.						</Text>
					</Box>
					<Box>
						<Title text={'Репутаційний Моніторинг'} />
						<Text
							fontFamily={'Exo_2'}
						>
							Зберігайте свій репутаційний капітал під контролем. Ми надаємо можливість відстежувати згадки про ваш бренд або продукт у мережі, контролювати настрої користувачів і вчасно реагувати на негативні ситуації.						</Text>
					</Box>
				</VStack>
				<Image src={Analyzed} />
			</MainAboutFirstSection>
			<MainAboutFirstSection >
				<VStack  width={{base:'full',xl:'55%'}} rowGap={'60px'}>
					<Box>
						<Title text={'Виявлення Загроз та Ризиків'} />
						<Text
							fontFamily={'Exo_2'}
						>
							Наші інструменти виявляють потенційні загрози для вашого бізнесу, включаючи згадки про кібератаки, підозрілі активності в мережі та інші ризикові фактори. Це дозволяє приймати превентивні заходи для захисту вашої компанії.
						</Text>
					</Box>
					<Box>
						<Title text={'Дослідницька Аналітика'} />
						<Text
							fontFamily={'Exo_2'}
						>
							Наша команда експертів з OSINT допомагає вам здійснювати дослідження з різних сфер діяльності: від академічних досліджень до розслідування кримінальних справ. Ми забезпечуємо детальну аналітику, яка грає ключову роль у вашому успіху.
						</Text>
					</Box>
				</VStack>
				<Image src={Risks} />
			</MainAboutFirstSection>
		</Container>
	);
};

