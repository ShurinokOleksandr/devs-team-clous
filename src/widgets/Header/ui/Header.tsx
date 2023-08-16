import {ListItem, VStack, Select, Image, List, Flex, Text, Box} from "@chakra-ui/react";
import React from 'react';

import {ReactComponent as SelectArrow} from '../../../shared/assets/arrow.svg'
import BgImg from '../../../shared/assets/bg.jpg'

export const Header = () => {
	return (
		<Box  position={'relative'} bgColor={'black'} color={'white'} height={870} pb={'100px'} px={'80px'} pt={'40px'}>
			 
			<Flex justifyContent={'end'} display={'flex'} >
				<List   marginX={'auto'}  width={'652px'} >
					<Flex justify={"space-between"}>
						<ListItem>Головна</ListItem>
						<ListItem>Про OSINT</ListItem>
						<ListItem>Послуги</ListItem>
						<ListItem>Кейси</ListItem>
						<ListItem>Клієнти</ListItem>
						<ListItem>Контакти</ListItem>
					</Flex>
				</List>
				<Select icon={<SelectArrow />}   border={"none"}  fontSize={15}   color='white'     height={27} width={61}  size='xs' >
					<option style={{ background: 'black' }} value='option1'>UA</option>
					<option style={{ background: 'black' }} value='option2'>EN</option>
				</Select>
			</Flex>
			<Image position={'absolute'} opacity={'50%'} right={'5%'} src={BgImg} top={'20%'} />
			<VStack direction={'column'} justify={'end'} height={'full'} align='start'  >
				<Text fontWeight={"medium"} fontFamily={'Exo_2'} color={'lightGray'} fontSize={'20px'}>Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.</Text>
				<Text fontWeight={"medium"} fontFamily={'damn'} letterSpacing={31} fontSize={'460px'} lineHeight={1} color={'blue'} zIndex={100} as={'h1'}>OSINT</Text>
			</VStack>
		</Box>
	);
};

