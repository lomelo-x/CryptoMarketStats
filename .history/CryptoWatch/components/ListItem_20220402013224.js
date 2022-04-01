import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function ListItem(props) {
	return (
		<TouchableOpacity
		<View style={styles.container}>
			<Text>List Item</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	},
});

export default ListItem;
