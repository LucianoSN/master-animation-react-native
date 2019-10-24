import { Animated, Easing } from 'react-native';
import { Colors } from '../../styles/Colors';

const state = {
	animation: new Animated.Value(0),
};

const timing = (value, during) => {
	return Animated.timing(state.animation, {
		toValue: value,
		duration: during,
		easing: Easing.linear,
	});
};

const apply = (value1, value2, value3) => {
	return state.animation.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [value1, value2, value3],
	});
};

const startAnimation = () => {
	timing(1, 4500).start(() => timing(0, 4500).start());
};

const bgAnimatedStyles = {
	backgroundColor: apply(Colors.green, Colors.tomato, Colors.bgColor),
};

const textAnimatedStyles = {
	color: apply(Colors.bgColor, Colors.white, Colors.green),
};

export { startAnimation, bgAnimatedStyles, textAnimatedStyles };
