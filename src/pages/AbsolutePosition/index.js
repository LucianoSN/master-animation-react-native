import React from 'react';

import { animatedStyles, startAnimation } from './animations';

import { Container, Box, Press } from './styles';

const AbsolutePosition = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]} />
			</Press>
		</Container>
	);
};

export default AbsolutePosition;
