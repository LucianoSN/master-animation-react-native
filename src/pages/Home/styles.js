import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: #ff6347;
`;

export const ButtonText = styled.Text`
	color: #fff;
`;

export const List = styled(ScrollView).attrs({
	showsVerticalScrollIndicator: false,
})`
	width: 100%;
`;

export const Button = styled(RectButton)`
	background-color: #db4f36;

	width: 100%;

	padding: 15px;
	margin-bottom: 5px;
`;
