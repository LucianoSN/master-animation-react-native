import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const index = () => {
	return (
		<>
			<StatusBar barStyle="#fff" backgroundColor="#fff" />
			<Routes />
		</>
	);
};

export default index;
