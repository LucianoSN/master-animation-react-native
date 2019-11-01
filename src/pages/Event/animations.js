import { Animated } from 'react-native';
import { Colors } from '../../styles/Colors';

const state = {
	animation: new Animated.Value(0),
};

const debug = () => {
	state.animation.addListener(({ value }) => {
		console.log(value);

		if (value > 500) {
			console.log('MAIOR');
		}
	});
};

const backgroundInterpolate = (color1, color2) => {
	debug();
	return state.animation.interpolate({
		inputRange: [0, 3000],
		outputRange: [color1, color2],
	});
};

const backgroundStyles = {
	backgroundColor: backgroundInterpolate(Colors.tomato, Colors.bgColor),
};

export { state, backgroundStyles };
