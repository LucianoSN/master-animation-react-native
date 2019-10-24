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

const colorInterpolation = (color1, color2, color3) => {
	return state.animation.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [color1, color2, color3],
	});
};

const sizeInterpolation = (size1, size2, size3) => {
	return state.animation.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [size1, size2, size3],
	});
};

const startAnimation = () => {
	timing(1, 4500).start(() => timing(0, 4500).start());
};

const bgAnimatedStyles = {
	backgroundColor: colorInterpolation(
		Colors.green,
		Colors.tomato,
		Colors.bgColor
	),
};

const textAnimatedStyles = {
	color: colorInterpolation(Colors.bgColor, Colors.white, Colors.green),
	fontSize: sizeInterpolation(24, 50, 12),
};

export { startAnimation, bgAnimatedStyles, textAnimatedStyles };
