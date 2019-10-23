import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: ${Colors.bgColor};
`;

export const ButtonText = styled.Text`
	color: ${Colors.text};
`;

export const List = styled(ScrollView).attrs({
	showsVerticalScrollIndicator: false,
})`
	width: 100%;
`;

export const Button = styled(RectButton)`
	background-color: ${Colors.bgColorLight}

	width: 100%;

	padding: 15px;
	margin-bottom: 5px;
`;
