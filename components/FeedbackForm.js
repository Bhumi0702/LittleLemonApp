import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const FeedbackForm = () => {
	// declare the variables
	const [ firtsName, onChangeFirstName ] = useState('');
	const [ lastName, onChangeLastName ] = useState('');
	const [ message, onChangeMessage ] = useState('');
	const [ phoneNumber, onChangePhoneNumber ] = useState('');

	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'android' ? 'padding' : 'height'}>
			<ScrollView KeyboardAvoidingView="on-drag">
				<Text style={styles.headingSection}>How was your visit to Little Lemon ?</Text>
				<Text style={styles.infoSection}>
					Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a
					lively but casual environment.We would love to hear your experience with us!
				</Text>
				<TextInput
					style={styles.input}
					value={firtsName}
					placeholder="First Name"
					onChangeText={onChangeFirstName}
				/>
				<TextInput
					style={styles.input}
					value={lastName}
					placeholder="Last Name"
					onChangeText={onChangeLastName}
				/>
				<TextInput
					style={styles.input}
					value={phoneNumber}
					placeholder="Phone Number"
					onChangeText={onChangePhoneNumber}
					keyboardType={'phone-pad'}
				/>
				<TextInput
					style={styles.input}
					value={message}
					placeholder="Please leave Feedback"
					onChangeText={onChangeMessage}
					multiline={true}
					maxLength={250}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		borderColor: 'EDEFEE',
		backgroundColor: '#EDEFEE'
	},
	messageInput: {
		height: 100,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		backgroundColor: 'white'
	},
	infoSection: {
		fontSize: 24,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
		backgroundColor: '#333333'
	},
	headingSection: {
		fontSize: 28,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
		backgroundColor: '#333333'
	}
});

export default FeedbackForm;
