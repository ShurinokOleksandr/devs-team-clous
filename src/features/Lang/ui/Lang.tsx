import {ReactComponent as SelectArrow} from 'src/shared/assets/arrow.svg'
import {Select} from "@chakra-ui/react";
import React from 'react';

export const Lang = () => {
	return (
		<Select
			icon={<SelectArrow />}
			border={"none"}
			fontSize={15}
			color='white'
			height={27}
			width={85}
			size='xs'
		>
			<option style={{ background: 'black' }} value='option1'>UA</option>
			<option style={{ background: 'black' }} value='option2'>EN</option>
		</Select>
	);
};

