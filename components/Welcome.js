import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button, useColorScheme, useWindowDimensions } from 'react-native';
import { useDeviceOrientation, useClipboard } from '@react-native-community/hooks';

const Welcome = () => {
	const colorScheme = useColorScheme();
	const window = useWindowDimensions();
	const orientation = useDeviceOrientation();
	const [ data, setstring ] = useClipboard();

	console.log('is orientation portrait: ', orientation.portrait);
	console.log('is orientation lamdscape: ', orientation.landscape);

	return (
		<ScrollView
			style={[
				styles.container,
				colorScheme === 'light' ? { backgroundColor: '#fff' } : { backgroundColor: '#333333' }
			]}
		>
			<Image
				style={styles.logo}
				source={require('../img/littleLemonLogo.png')}
				resizeMode="center"
				accessible={true}
				accessibilityLabel={'Littel Lemon Logo'}
			/>
			<Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>
			<Text style={styles.regular}>Color Scheme: {colorScheme}</Text>

			<Text style={styles.regular}>Window Dimensions</Text>
			<Text style={styles.regular}>Height: {window.height}</Text>
			<Text style={styles.regular}>Width: {window.width}</Text>
			<Text style={styles.regular}>Font Scale: {window.fontScale}</Text>
			<Text>{data}</Text>

			<Button title="Update Clipboard" onPress={() => setstring('new clipbaord data')}>
				Set Clipboard
			</Button>

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
		marginTop: 25
	},
	regular: {
		fontSize: 18,
		textAlign: 'center'
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
