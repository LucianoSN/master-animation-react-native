import React from 'react';

import { startAnimation, animatedStyles } from './animations';

import { Container, Press, Box } from './styles';

const WidthHeightPercentage = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]}></Box>
			</Press>
		</Container>
	);
};

export default WidthHeightPercentage;
