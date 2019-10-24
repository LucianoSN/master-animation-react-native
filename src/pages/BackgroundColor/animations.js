import { Animated } from 'react-native';
import { Colors } from '../../styles/Colors';

const state = {
	animation: new Animated.Value(0),
};

const timing = (value, during) => {
	return Animated.timing(state.animation, {
		toValue: value,
		duration: during,
	});
};

const colorInterpolation = (color1, color2) => {
	return state.animation.interpolate({
		inputRange: [0, 1],
		outputRange: [color1, color2],
	});
};

const startAnimation = () => {
	timing(1, 1500).start(() => timing(0, 1500).start());
};

const bgAnimatedStyles = {
	backgroundColor: colorInterpolation(Colors.green, Colors.bgColor),
};

const textAnimatedStyles = {
	color: colorInterpolation(Colors.bgColor, Colors.green),
};

export { startAnimation, bgAnimatedStyles, textAnimatedStyles };
