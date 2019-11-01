import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled(Animated.View)`
	height: 4000px;
`;

export const Scroll = styled(Animated.ScrollView).attrs({
	scrollEventThrottle: 16,
})``;
