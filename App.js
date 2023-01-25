import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import Welcome from './components/Welcome';

export default function App() {

	const Stack = createNativeStackNavigator();

	function LogoTitle() {
		return(
			<Image source={require('./img/logo.png')}
				style={{
					height: 40,
					width: 300,
					resizeMode: 'contain',
					alignself: 'center',
				}}
			></Image>
		);
	}

	return (
		<>
			<NavigationContainer>
				
						<Stack.Navigator 
							initialRouteName='Login'
							screenOptions={{
								headerStyle: { backgroundColor: '#333333' },
								headerTintColor: '#fff',
								headerTitleStyle: {
									fontWeight: 'bold',
								},
							}}>
							<Stack.Screen 
								name='Welcome' 
								component={WelcomeScreen} 
								options={{ 
									title: 'Home',
									headerTitle: (props) => <LogoTitle {...props}></LogoTitle>
								}}/>
							<Stack.Screen name='Login'component={LoginScreen} />
							<Stack.Screen name='Menu'component={MenuItems} />
						</Stack.Navigator>
				
			
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
	},
	footerView: {
		backgroundColor: '#33333'
	}
})


