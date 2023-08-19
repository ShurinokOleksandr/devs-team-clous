import { Links } from 'src/shared/lib/lists/Links';
import { ListItem, Link } from '@chakra-ui/react';
import React from 'react';

export const NavLinks = () => {
	return (
		<>
			{
				Links.map(({name,href}) =>
					<ListItem
						_hover={{color:'gray'}}
						key={name}
					>
						<Link
							href={href}
						>
							{name}
						</Link>
					</ListItem>
				)
			}
		</>
	);
};



