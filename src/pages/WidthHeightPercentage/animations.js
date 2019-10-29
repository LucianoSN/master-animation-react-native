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
	timing(0, 350).start(() => {
		timing(1, 500).start();
	});
};

const interpolation = (value1, value2) => {
	return state.animation.interpolate({
		inputRange: [0, 1],
		outputRange: [value1, value2],
	});
};

const animatedStyles = {
	width: interpolation('20%', '50%'),
	height: interpolation('20%', '30%'),
};

export { startAnimation, animatedStyles };
