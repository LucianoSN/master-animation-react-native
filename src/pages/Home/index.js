import React from 'react';

import { Container, List, Text, Button } from './styles';

const Home = ({ navigation }) => {
	return (
		<Container>
			<List>
				<Button onPress={() => navigation.navigate('Page1')}>
					<Text>001. Opacity</Text>
				</Button>
			</List>
		</Container>
	);
};

export default Home;
