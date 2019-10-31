import React, { useEffect } from 'react';

import { startAnimation, resetAnimation, animatedStyles } from './animations';

import { Container, Box, Press } from './styles';

const Loop = () => {
	useEffect(() => {
		return () => {
			resetAnimation();
		};
	}, []);

	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]} />
			</Press>
		</Container>
	);
};

export default Loop;
