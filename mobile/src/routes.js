import { createAppContainer } from 'react-navigation';
import { createStackContainer } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Router = createAppContainer(
	createStackContainer({
		Main:{
			screen: Main, 
			navigationOptions: {
				title: 'DevRadar'
			},
		}, 
		Profile:{
			screen: Profile, 
			navigationOptions: {
				title: 'Perfil no GitHub'
			},
		},
	}, {
		defaultNavigationOptions: {
			headerTintColor: "FFF",
			headerBackTitleVisible: false,
			headerStyle: {
				background: "#7D40E7"
			}
		},
	})
); 

export default Router;