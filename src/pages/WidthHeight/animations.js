import { Animated } from 'react-native';

const state = {
	animation: new Animated.Value(150),
};

const timing = (value, during) => {
	return Animated.timing(state.animation, {
		toValue: value,
		duration: during,
	});
};

const startAnimation = () => {
	timing(300, 1500).start(() => state.animation.setValue(150));
};

const animatedStyles = {
	width: state.animation,
	height: state.animation,
};

export { animatedStyles, startAnimation };
