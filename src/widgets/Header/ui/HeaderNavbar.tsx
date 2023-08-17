import {Image, List, Flex} from "@chakra-ui/react";
import {DrawerLinks} from "src/entities/Drawer";
import {NavLinks} from "src/entities/NavLinks";
import BgImg from "src/shared/assets/bg.jpg";
import {Lang} from "src/features/Lang";
import React from 'react';

export const HeaderNavbar = () => {
	return (
		<Flex justifyContent={{base:'space-between',lg:'end' }} display="flex" >
			<List   width={{base:'100px',lg:'652px'}}  marginX={{lg:'auto' ,base:0 }} >
				<Flex display={{base:'none',lg:"flex"}} justify="space-between" >
					<NavLinks />
				</Flex>
				<DrawerLinks />
			</List>
			<Lang />
			<Image
				top={['25%','5%','25%','25%','15%']}
				filter="brightness(50%)"
				position="absolute"
				src={BgImg}
				zIndex={1}
				right={0}
			/>
		</Flex>
	);
};
