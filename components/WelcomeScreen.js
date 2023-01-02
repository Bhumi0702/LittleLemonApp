import { View, Text } from 'react-native-web';

export default function WelcomeScreen() {
	return (
		<View
			style={{
				flex: 0.15,
				backgroundColor: '#495E57'
			}}
		>
			<Text
				style={{
					fontSize: 25,
					color: 'white',
					textAlign: 'center'
				}}
			>
				Welcome to Little Lemon
			</Text>

			<Text
				style={{
					padding: 40,
					fontSize: 20,
					color: 'white',
					textAlign: 'center'
				}}
			>
				Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively
				but casual environment. We would love to hear more about your experience with us!
			</Text>
		</View>
	);
}
