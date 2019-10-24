import React from 'react';

import {
	startAnimation,
	bgAnimatedStyles,
	textAnimatedStyles,
} from './animations';

import { Container, Press, Text } from './styles';

const BackgroundColor = () => {
	return (
		<Press onPress={startAnimation}>
			<Container style={[bgAnimatedStyles]}>
				<Text style={[textAnimatedStyles]}>Hello Animations!</Text>
			</Container>
		</Press>
	);
};

export default BackgroundColor;
