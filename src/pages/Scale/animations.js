import { Animated } from 'react-native';

const state = {
	animation: new Animated.Value(1),
};

const timing = (value, during) => {
	return Animated.timing(state.animation, {
		toValue: value,
		duration: during,
	});
};

const startAnimation = () => {
	timing(2, 1500).start(() => state.animation.setValue(1));
};

const animatedStyles = {
	transform: [
		{
			scale: state.animation,
		},
	],
};

export { animatedStyles, startAnimation };
