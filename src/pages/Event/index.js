import React from 'react';
import { Animated } from 'react-native';

import { state, backgroundStyles } from './animations';

import { Container, Content, Scroll } from './styles';

const Event = () => {
	const scroll = Animated.event([
		{
			nativeEvent: {
				contentOffset: {
					y: state.animation,
				},
			},
		},
	]);

	return (
		<Container>
			<Scroll onScroll={scroll}>
				<Content style={[backgroundStyles]} />
			</Scroll>
		</Container>
	);
};

export default Event;
