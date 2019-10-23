import styled from 'styled-components';
import { Animated } from 'react-native';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Ball = styled(Animated.View)`
	width: 150px;
	height: 150px;
	border-radius: 75px;
	background-color: ${Colors.green};
`;

export const Press = styled.TouchableWithoutFeedback``;
