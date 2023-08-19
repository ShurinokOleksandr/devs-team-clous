import { ReactComponent as SelectArrow } from 'src/shared/assets/arrow.svg';
import { useOutsideClick, Select } from '@chakra-ui/react';
import React from 'react';

export const Lang = () => {
	const ref = React.useRef<HTMLSelectElement | null>(null)
	
	const [isSelectOpen, setIsSelectOpen] = React.useState(false)
	useOutsideClick({
		handler: () => setIsSelectOpen(false),
		ref: ref,
	})
	return (
		<Select
			icon={<SelectArrow transform={`${isSelectOpen ? 'rotate(180)' : ''}`}  />}
			onClick={() => setIsSelectOpen(!isSelectOpen)}
			color='white'
			fontSize={15}
			border="none"
			height={27}
			width={65}
			size='xs'
			ref={ref}
		>
			<option style={{ background: 'black' }} value='option1'>UA</option>
			<option style={{ background: 'black' }} value='option2'>EN</option>
		</Select>
	);
};

