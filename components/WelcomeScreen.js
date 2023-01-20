import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
	return (
		<ScrollView indicatorStyle={'white'} style={styles.container}>
			<View style={styles.headerWrapper}>
				<Image
					style={styles.image}
					source={require('../img/logo.png')}
					resizeMode="cover"
					accessible={true}
					accessibilityLabel={'Littel Lemon Logo'}
				/>
				<Text style={styles.headerText}> Little Lemon</Text>
			</View>
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
	image: {
		width: 100,
		height: 100,
		borderRadius: 20
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
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 10
	},
	headerText: {
		paddingRight: 10,
		paddingLeft: 20,
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 30,
		color: '#EDEFEE',
		textAlign: 'center'
	}
});
