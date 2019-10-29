import styled from 'styled-components';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
`;

export const Text = styled.Text`
	color: ${Colors.white};
`;

export const Press = styled.TouchableWithoutFeedback``;

export const Box = styled(Animated.View)`
	width: 150px;
	height: 150px;
	background-color: ${Colors.bgColor};

	justify-content: center;
	align-items: center;

	border-radius: 75px;
`;

export const Button = styled(RectButton)`
	background-color: ${Colors.tomato};
	padding: 10px;
	margin-bottom: 20px;
	margin-top: 40px;
	border-radius: 4px;
`;
