import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import Welcome from './components/Welcome';

export default function App() {

	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

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
			{/* 	TAB NAVIGATOR BETWEEM LOGIN AND WELCOME SCREEN  */}
			
		<NavigationContainer>
			<View style={styles.container}>
				<LittleLemonHeader />
				<Tab.Navigator
					screenOptions={({ route }) => ({
					tabBarIcon: ({size}) => {
						let iconName;
						if (route.name === 'Welcome') {
						iconName = 'ios-home';
						} else if (route.name === 'Login') {
						iconName = 'ios-enter';
						}
						return <Ionicons name={iconName} size={size} />;
					},
					})}
					initialRouteName="Login">
					<Tab.Screen name="Welcome" component={WelcomeScreen} />
					<Tab.Screen name="Login" component={LoginScreen} />
				</Tab.Navigator>
			</View>
				<View style={styles.footerContainer}>
				<LittleLemonFooter />
				</View>
      	</NavigationContainer>

			{/* :::::::::::::::::::TAB NAVIGATOR ---------WELCOME & MENU SCREEN.................................
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if(route.name === 'Welcome') {
								iconName = focused
									? 'ios-information-circle'
									: 'ios-information-circle-outline';
							}else if (route.name === 'Menu'){
								iconName = 'ios-list';
							}
							return <Ionicons name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: 'tomato',
						tabBarInactiveTintColor: 'gray'
					})}>
					<Tab.Screen name="Welcome" component={WelcomeScreen} />
					<Tab.Screen name="Menu" component={MenuItems} />
				</Tab.Navigator> 
				</NavigationContainer>*/}

					{/* :::::::::::::::MOVING BETWEEN SCREENS::::::::::::
					
					
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
						</Stack.Navigator> */}
				
			
			
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


