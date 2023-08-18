import {HeaderNavbar} from "src/widgets/Header/ui/HeaderNavbar";
import {HeaderBody} from "src/widgets/Header/ui/HeaderBody";
import { Image, Box } from '@chakra-ui/react';
import BgImg from 'src/shared/assets/bg.jpg';
import React from 'react';

export const MainSection = () => {
	return (
		<Box
			px={['40px','50px','60px','70px','80px']}
			pt={['12px','20px','25px','30px','40px']}
			height={[450,620,750,750 ]}
			bgColor="black"
			color="white"
			pb="30px"
		>
			<Box height={[450,620,750,750 ]} position="relative" maxWidth="1360px" mx="auto">
				<HeaderNavbar />
				<HeaderBody />
				<Image
					top={['10%','10%','10%','10%','0%']}
					position="absolute"
					
					src={BgImg}
					zIndex={1}
					right={0}
		
				
				/>
			</Box>
		</Box>
	);
};
