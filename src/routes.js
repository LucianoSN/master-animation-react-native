import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from './styles/Colors';

import Home from './pages/Home';
import Opacity from './pages/Opacity';
import TranslatePosition from './pages/TranslatePosition';
import Scale from './pages/Scale';
import WidthHeight from './pages/WidthHeight';
import AbsolutePosition from './pages/AbsolutePosition';
import BackgroundColor from './pages/BackgroundColor';
import Rotation from './pages/Rotation';
import WidthHeightPercentage from './pages/WidthHeightPercentage';
import Easing from './pages/Easing';
import Spring from './pages/Spring';
import Loop from './pages/Loop';
import Event from './pages/Event';

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
		Page6: {
			screen: BackgroundColor,
			navigationOptions: {
				headerTitle: 'Background Color',
				headerTintColor: Colors.bgColor,
			},
		},
		Page7: {
			screen: Rotation,
			navigationOptions: {
				headerTitle: 'Rotation',
				headerTintColor: Colors.bgColor,
			},
		},
		Page8: {
			screen: WidthHeightPercentage,
			navigationOptions: {
				headerTitle: 'Width Height Percentage',
				headerTintColor: Colors.bgColor,
			},
		},
		Page9: {
			screen: Easing,
			navigationOptions: {
				headerTitle: 'Easing',
				headerTintColor: Colors.bgColor,
			},
		},
		Page10: {
			screen: Spring,
			navigationOptions: {
				headerTitle: 'Spring',
				headerTintColor: Colors.bgColor,
			},
		},
		Page11: {
			screen: Loop,
			navigationOptions: {
				headerTitle: 'Loop',
				headerTintColor: Colors.bgColor,
			},
		},
		Page12: {
			screen: Event,
			navigationOptions: {
				headerTitle: 'Event',
				headerTintColor: Colors.bgColor,
			},
		},
	},
	{ initialRouteName: 'Home', mode: 'modal', headerMode: 'float' }
);

export default createAppContainer(Routes);
