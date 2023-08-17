import {HeaderNavbar} from "src/widgets/Header/ui/HeaderNavbar";
import {HeaderBody} from "src/widgets/Header/ui/HeaderBody";
import {Box} from "@chakra-ui/react";
import React from 'react';

export const Header = () => {
	return (
		<Box
			px={['40px','50px','60px','70px','80px']}
			pt={['12px','20px','25px','30px','40px']}
			height={{base:'650px',md:'full'}}
			bgColor="black"
			color="white"
			pb="30px"
		>
			<Box height={[450,720,750,800,830,870]} position="relative" maxWidth="1360px" mx="auto">
				<HeaderNavbar />
				<HeaderBody />
			</Box>
		</Box>
	);
};

