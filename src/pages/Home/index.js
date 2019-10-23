import React from 'react';

import { Container, List, Button, ButtonText } from './styles';

const Pages = [
	{
		title: 'Opacity',
		page: 'Page1',
	},
];

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
