import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const Welcome = () => {
	return (
		<ScrollView style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../img/littleLemonLogo.png')}
				resizeMode="center"
				accessible={true}
				accessibilityLabel={'Littel Lemon Logo'}
			/>
			<Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>
			<Image
				style={styles.image}
				source={require('../img/Picture1.png')}
				resizeMode="cover"
				accessible={true}
				accessibilityLabel={'Food Picture 1'}
			/>
			<Image
				style={styles.image}
				source={require('../img/Picture2.png')}
				resizeMode="cover"
				accessible={true}
				accessibilityLabel={'Food Picture 2'}
			/>
			<Image
				style={styles.image}
				source={require('../img/Picture3.png')}
				resizeMode="cover"
				accessible={true}
				accessibilityLabel={'Food Picture 3'}
			/>
			<Image
				style={styles.image}
				source={require('../img/Picture4.png')}
				resizeMode="cover"
				accessible={true}
				accessibilityLabel={'Food Picture 4'}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	logo: {
		height: 100,
		width: 300,
		resizeMode: 'contain'
	},
	image: {
		width: 350,
		height: 250,
		borderRadius: 2,
		margin: 10
	},
	container: {
		flex: 1,
		padding: 24,
		marginTop: 25,
		backgroundColor: '#fff'
	},

	title: {
		marginTop: 16,
		paddingVertical: 10,
		color: '#333333',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default Welcome;
