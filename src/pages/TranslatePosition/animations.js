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
	// timing(200, 1500).start(() => state.animation.setValue(0));
	timing(200, 1500).start(() => timing(0, 500).start());
};

const animatedStyles = {
	transform: [{ translateY: state.animation }],
};

export { startAnimation, animatedStyles };
