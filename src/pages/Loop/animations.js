import { Animated } from 'react-native';

const state = {
	animation: new Animated.Value(0),
};

const timing = (value, during) => {
	return Animated.timing(state.animation, {
		toValue: value,
		duration: during,
	});
};

const startAnimation = () => {
	Animated.loop(timing(1, 1500)).start();
};

const interpolating = (value1, value2) => {
	return state.animation.interpolate({
		inputRange: [0, 1],
		outputRange: [value1, value2],
	});
};

const animatedStyles = {
	transform: [
		{
			rotate: interpolating('0deg', '360deg'),
		},
	],
};

const resetAnimation = () => {
	state.animation.setValue(0);
};

export { startAnimation, resetAnimation, animatedStyles };
