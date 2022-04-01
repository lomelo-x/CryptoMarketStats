import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function ListItem(props) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					
				</View>
				<Text>List Item</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {

	},
});

export default ListItem;
