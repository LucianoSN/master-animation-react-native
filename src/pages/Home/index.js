import React from 'react';

import { Container, List, Button, ButtonText } from './styles';

const Home = ({ navigation }) => {
	return (
		<Container>
			<List>
				<Button onPress={() => navigation.navigate('Page1')}>
					<ButtonText>001. Opacity</ButtonText>
				</Button>
			</List>
		</Container>
	);
};

export default Home;
