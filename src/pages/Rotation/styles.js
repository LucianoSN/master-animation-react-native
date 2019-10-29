import styled from 'styled-components';
import { Animated } from 'react-native';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	color: ${Colors.white};
`;

export const Press = styled.TouchableWithoutFeedback``;

export const Box = styled(Animated.View)`
	justify-content: center;
	align-items: center;

	width: 150px;
	height: 150px;
	background-color: ${Colors.green};
`;
