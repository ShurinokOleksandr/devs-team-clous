import React from 'react';

import { HeaderMainSection } from './HeaderMainSection';
import { Navbar } from './Navbar';

export const Header = () => {
	return (
		<>
			<Navbar />
			<HeaderMainSection />
		</>
	);
};
