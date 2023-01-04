import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
	return (
		<View
			style={{
                flex: 0.2,
				backgroundColor: '#F4CE14',
				position: 'fixed',
				bottom: 0
			}}
		>
			<Text
				style={{
					fontSize: 18,
					color: 'black',
					textAlign: 'center'
				}}
			>
				All rights reserved by Little Lemon, 2022{' '}
			</Text>
		</View>
	);
}
