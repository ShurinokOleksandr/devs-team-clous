import {Links} from "src/shared/lib/lists/Links";
import {ListItem} from "@chakra-ui/react";
import React from 'react';

export const NavLinks = () => {
	return (
		<>
			{
				Links.map(({name,href}) =>
					<ListItem
						_hover={{color:'gray'}}
						href={href}
						as="a"
					>
						{name}
					</ListItem>
				)
			}
		</>
	);
};

