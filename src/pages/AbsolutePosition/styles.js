import styled from 'styled-components';
import { Animated } from 'react-native';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Box = styled(Animated.View)`
	position: absolute;
	height: 150px;
	right: 0;
	background-color: ${Colors.green};
`;

export const Press = styled.TouchableWithoutFeedback``;
