import React from 'react';

import { startAnimation, animatedStyles } from './animations';

import { Container, Box, Press } from './styles';

const Opacity = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]} />
			</Press>
		</Container>
	);
};

export default Opacity;
