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
			border="none"
			fontSize={15}
			color='white'
			height={27}
			width={20}
			ref={ref}
			size='xs'
		>
			<option style={{ background: 'black', padding: '20px'   }} value='option1' label="select">UA</option>
			<option style={{ background: 'black', padding: '20px'    }} value='option2' label="select">EN</option>
		</Select>
	);
};

