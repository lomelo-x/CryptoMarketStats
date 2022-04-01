import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

function ListItem(props) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image
						style={styles.image}
						source={{
							uri: 'https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg',
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
	rightContainer: {},
	titleContainer: {
		marginLeft: 10,
	},
	coinTitle: { color: 'lightgrey', fontSize: 18 },
	coinSubTitle: { color: 'lightgrey', fontSize: 14, marginTop: 4 },
	coinPrice: { color: 'lightgrey', fontSize: 18 },
	coinSubPrice: { color: 'red', fontSize: 14 },
});

export default ListItem;
