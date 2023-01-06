import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
	return (
		<ScrollView indicatorStyle={'white'} style={styles.container}>
			<Text style={styles.headingText}>
				Welcome to
				<Text style={styles.innerText}> Little Lemon</Text>
			</Text>

			<Text style={styles.otherText}>
				Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively
				but casual environment. We would love to hear more about your experience with us!
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headingText: {
		padding: 40,
		fontSize: 30,
		color: '#EDEFEE',
		textAlign: 'center'
	},
	otherText: {
		padding: 20,
		fontSize: 24,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center'
	},
	innerText: {
		fontWeight: 'bold'
	}
});
