import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

function ListItem({name, symbol, currentPrice, changePercent, logo}) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image
						style={styles.image}
						source={{l
						}}
					/>
					<View style={styles.titleContainer}>
						<Text style={styles.coinTitle}>Ethereum</Text>
						<Text style={styles.coinSubTitle}>ETH</Text>
					</View>
				</View>
				<View style={styles.rightContainer}>
					<Text style={styles.coinPrice}>Ethereum</Text>
					<Text style={styles.coinSubPrice}>ETH</Text>
				</View>
				<Text>List Item</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginTop: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	image: {
		height: 40,
		width: 40,
	},
	leftContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rightContainer: {
		alignItems: 'flex-end',
	},
	titleContainer: {
		marginLeft: 10,
	},
	coinTitle: {
		color: 'lightgrey',
		fontSize: 18,
	},
	coinSubTitle: {
		color: 'lightgrey',
		fontSize: 14,
		marginTop: 4
	},
	coinPrice: { color: 'lightgrey', fontSize: 18 },
	coinSubPrice: { color: 'red', fontSize: 14 },
});

export default ListItem;
