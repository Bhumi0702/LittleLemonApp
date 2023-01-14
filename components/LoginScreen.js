import { ScrollView, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen() {
	const [ email, onChangeEmail ] = useState('');
	const [ password, onChangePassword ] = useState('');

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.headerText}>Welcome to Little Lemon</Text>
			<Text style={styles.regularText}>Login to continue . . </Text>
			<TextInput
				style={styles.input}
				value={email}
				placeholder="Email"
				onChangeText={onChangeEmail}
				keyboardType={'email-address'}
				onFocus={() => {
					Alert.alert('Email is focussed');
				}}
				onBlur={() => {
					Alert.alert('Email is now blurred');
				}}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.input}
				value={password}
				placeholder="Password"
				onChangeText={onChangePassword}
				keyboardType={'default'}
				clearButtonMode={'always'}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerText: {
		padding: 40,
		fontSize: 30,
		color: '#EDEFEE',
		textAlign: 'center'
	},
	regularText: {
		fontSize: 24,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center'
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		borderColor: 'EDEFEE',
		backgroundColor: '#EDEFEE'
	}
});
