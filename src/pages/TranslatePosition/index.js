import React from 'react';

import { Container, Ball, Press } from './styles';

import { animatedStyles, startAnimation } from './animations';

const TranslatePosition = () => {
	return (
		<Container>
			<Press onPress={startAnimation}>
				<Ball style={[animatedStyles]} />
			</Press>
		</Container>
	);
};

export default TranslatePosition;
