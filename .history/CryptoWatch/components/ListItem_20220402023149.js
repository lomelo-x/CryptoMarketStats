import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

function ListItem({
	coinName,
	coinAbbreviation,
	currentPrice,
	priceChangePercent,
	coinLogo,
}) {
	const priceChangePercentColor = priceChangePercent > 0 ? 'green' : 'red';

	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image style={styles.image} source={{ uri: coinLogo }} />
					<View style={styles.titleContainer}>
						<Text style={styles.coinTitle}>{coinName}</Text>
						<Text style={styles.coinSubTitle}>
							{coinAbbreviation.toUpperCase()}
						</Text>
					</View>
				</View>
				<View style={styles.rightContainer}>
					<Text style={styles.coinPrice}>
						S{currentPrice.toLocaleString('en-US', { currency: 'USD' })}
					</Text>
					<Text
						style={[styles.coinSubPrice, { color: priceChangePercentColor }]}
					>
						{priceChangePercent.toFixed(3)}%
					</Text>
				</View>
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
		marginTop: 4,
	},
	coinPrice: {
		color: 'lightgrey',
		fontSize: 18,
	},
	coinSubPrice: {
		fontSize: 14,
	},
});

export default ListItem;
