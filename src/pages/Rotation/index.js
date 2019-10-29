import React from 'react';

import { Container, Text, Press, Box } from './styles';

import { startAnimation, animatedStyles } from './animations';

const Rotation = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]}>
					<Text>Hello Rotate!</Text>
				</Box>
			</Press>
		</Container>
	);
};

export default Rotation;
