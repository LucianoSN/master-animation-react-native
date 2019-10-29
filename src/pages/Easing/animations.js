import { Animated, Easing } from 'react-native';

const state = {
	animation: new Animated.Value(0),
};

const timing = (value, during) => {
	return Animated.timing(state.animation, {
		toValue: value,
		duration: during,

		// easing: Easing.back(5),
		easing: Easing.bounce,
		// easing: Easing.elastic(3),
		// easing: Easing.bezier(0.06, 1, 0.86, 0.23),
	});
};

const startAnimation = () => {
	timing(280, 500).start();
};

const resetAnimation = () => {
	timing(0, 500).start();
};

const animatedStyles = {
	transform: [{ translateY: state.animation }],
};

export { startAnimation, resetAnimation, animatedStyles };
