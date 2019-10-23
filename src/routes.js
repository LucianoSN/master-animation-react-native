import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Opacity from './pages/Opacity';

const Routes = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				headerTitle: 'Animations',
			},
		},
		Page1: {
			screen: Opacity,
			navigationOptions: {
				headerTitle: 'Opacity',
			},
		},
	},
	{ initialRouteName: 'Page1', mode: 'modal', headerMode: 'float' }
);

export default createAppContainer(Routes);
