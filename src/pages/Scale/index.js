import React from 'react';

import { Container, Box, Press } from './styles';

import { animatedStyles, startAnimation } from './animations';

const Scale = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]} />
			</Press>
		</Container>
	);
};

export default Scale;
