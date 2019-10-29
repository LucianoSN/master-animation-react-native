import React from 'react';

import { startAnimation, resetAnimation, animatedStyles } from './animations';

import { Container, Text, Press, Box, Button } from './styles';

const Easing = () => {
	return (
		<Container>
			<Button onPress={resetAnimation}>
				<Text>Reset</Text>
			</Button>

			<Press onPress={startAnimation}>
				<Box style={[animatedStyles]}>
					<Text>Easing</Text>
				</Box>
			</Press>
		</Container>
	);
};

export default Easing;
