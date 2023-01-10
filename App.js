import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<LittleLemonHeader />
				<MenuItems />
			</View>

			<View
				style={styles.footerView}>
				<LittleLemonFooter />
			</View>
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


