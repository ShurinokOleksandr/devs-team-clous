import {Image, List, Flex} from "@chakra-ui/react";
import {DrawerLinks} from "src/entities/Drawer";
import {NavLinks} from "src/entities/NavLinks";
import BgImg from "src/shared/assets/bg.jpg";
import {Lang} from "src/features/Lang";
import React from 'react';

export const HeaderNavbar = () => {
	return (
		<Flex justifyContent="end" display="flex" >
			<List   width={['full','full','full','full','652px']}  marginX="auto" >
				<Flex display={['none','none','none','flex']} justify="space-between">
					<NavLinks />
				</Flex>
				<DrawerLinks />
			</List>
			<Lang />
			<Image top={['25%','25%','25%','25%','15%']}  filter="brightness(50%)" position="absolute"   src={BgImg} zIndex={1} right="0%" />
		</Flex>
	);
};

