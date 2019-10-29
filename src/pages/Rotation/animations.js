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
	timing(360, 1500).start(() => state.animation.setValue(0));
};

const rotateInterpolation = () => {
	return state.animation.interpolate({
		inputRange: [0, 360],
		outputRange: ['0deg', '360deg'],
	});
};

const animatedStyles = {
	transform: [
		{
			rotate: rotateInterpolation(),
		},
	],
};

export { startAnimation, animatedStyles };
