import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '@src/page/auth';
import About from '@src/page/about';
import Main from '@src/page/list';
import Signin from '@src/page/signin';
import Login from '@src/page/login';

const AppNavigator = createNativeStackNavigator(
	{
		Auth: { screen: Auth },
		Signin: { screen: Signin },
		Login: { screen: Login },
		Main: { screen: Main },
		About: { screen: About },
	},

	{
		initialRouteName: 'Auth',
		defaultNavigationOptions: {
			headerShown: false,
		},
	}
);

export default AppNavigator;
