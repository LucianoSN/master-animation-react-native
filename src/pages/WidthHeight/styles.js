import styled from 'styled-components';
import { Animated } from 'react-native';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Box = styled(Animated.View)`
	background-color: ${Colors.green};
`;

export const Press = styled.TouchableWithoutFeedback``;
