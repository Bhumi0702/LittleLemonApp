import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
	return (
		<>
			<View style={style.container}>
				<LittleLemonHeader />
				<WelcomeScreen />
			</View>

			<View
				style={{
					backgroundColor: '#495E57'
				}}
			>
				<LittleLemonFooter />
			</View>
		</>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#495E57',
	},
})


