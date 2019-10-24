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
	timing(40, 1500).start(() => timing(0, 1500).start());
};

const animatedStyles = {
	top: state.animation,
	left: state.animation,
	right: state.animation,
};

export { animatedStyles, startAnimation };
