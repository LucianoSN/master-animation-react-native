import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Box = styled(Animated.View)`
	width: 150px;
	height: 150px;
	background-color: tomato;
`;

export const Press = styled.TouchableWithoutFeedback``;
