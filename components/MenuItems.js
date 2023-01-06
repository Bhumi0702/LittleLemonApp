import * as React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';

const menuItemsToDisplay = [
	'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta'
];

const MenuItems = () => {
	return (
		<View style={styles.container}>
			<ScrollView indicatorStyle="white" style={styles.innerContainer}>
				<Text style={styles.menuText}>View Menu</Text>
				<Text style={styles.otherText}>{menuItemsToDisplay[0]}</Text>
			</ScrollView>
		</View>
	);
};

export default MenuItems;

const styles = StyleSheet.create({
	container: {
		flex: 0.75
	},
	innerContainer: {
		paddingHorizontal: 40,
		paddingVertical: 40,
		backgroundColor: 'black'
	},
	menuText: {
		color: ' white',
		fontSize: 40,
		flexWrap: 'wrap'
	},
	otherText: {
		color: '#F4CE14',
		fontSize: 36
	}
});
