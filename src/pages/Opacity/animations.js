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

const animatedStyles = {
	opacity: state.animation,
};

export { startAnimation, animatedStyles };
