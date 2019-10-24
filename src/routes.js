import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from './styles/Colors';

import Home from './pages/Home';
import Opacity from './pages/Opacity';
import TranslatePosition from './pages/TranslatePosition';
import Scale from './pages/Scale';
import WidthHeight from './pages/WidthHeight';
import AbsolutePosition from './pages/AbsolutePosition';

const Routes = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				headerTitle: 'Master Animations',
				headerTintColor: Colors.green,
				headerStyle: {
					backgroundColor: Colors.bgColor,
					borderBottomWidth: 0,
				},
			},
		},
		Page1: {
			screen: Opacity,
			navigationOptions: {
				headerTitle: 'Opacity',
				headerTintColor: Colors.pink,
			},
		},
		Page2: {
			screen: TranslatePosition,
			navigationOptions: {
				headerTitle: 'Translate Position',
				headerTintColor: Colors.pink,
			},
		},
		Page3: {
			screen: Scale,
			navigationOptions: {
				headerTitle: 'Scale',
				headerTintColor: Colors.pink,
			},
		},
		Page4: {
			screen: WidthHeight,
			navigationOptions: {
				headerTitle: 'Width Height',
				headerTintColor: Colors.green,
			},
		},
		Page5: {
			screen: AbsolutePosition,
			navigationOptions: {
				headerTitle: 'Absolute Position',
				headerTintColor: Colors.green,
			},
		},
	},
	{ initialRouteName: 'Home', mode: 'modal', headerMode: 'float' }
);

export default createAppContainer(Routes);
