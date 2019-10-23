import React from 'react';

import Pages from './data';

import { Container, List, Button, ButtonText } from './styles';

const Home = ({ navigation }) => {
	return (
		<Container>
			<List>
				{Pages.map(item => (
					<Button
						key={item.page}
						onPress={() => navigation.navigate(item.page)}
					>
						<ButtonText>{item.title}</ButtonText>
					</Button>
				))}
			</List>
		</Container>
	);
};

export default Home;
