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

const spring = (toValue, friction, tension) => {
	return Animated.spring(state.animation, {
		toValue,
		friction,
		tension,
	});
};

const startAnimation = () => {
	spring(2, 2, 160).start(() => timing(1, 100).start());
};

const animatedStyles = {
	transform: [{ scale: state.animation }],
};

export { startAnimation, animatedStyles };
