import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Text = styled(Animated.Text)`
	font-size: 24px;
	font-weight: bold;
`;

export const Press = styled.TouchableWithoutFeedback``;
