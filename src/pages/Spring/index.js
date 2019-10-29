import React from 'react';

import { startAnimation, animatedStyles } from './animations';

import { Container, Press, Box } from './styles';

const Spring = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]} />
			</Press>
		</Container>
	);
};

export default Spring;
