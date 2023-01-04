import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
	return (
		<div>
			<View>
				<LittleLemonHeader />
			</View>

			<View>
				<WelcomeScreen />
			</View>

			<View>
				<LittleLemonFooter />
			</View>
		</div>
	);
}
