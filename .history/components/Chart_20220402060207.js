import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function Chart({
	currentPrice,
	priceChangePercent,
	coinLogo,
	coinName,
	coinAbbreviation,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<View style={styles.leftContainer}>
					<Image source={{ uri: coinLogo }} style={styles.image} />
					<Text style={styles.coinTitle}>
						{coinName}
						{coinAbbreviation}
					</Text>
				</View>
				<Text style={styles.coinTitle}>7d</Text>
			</View>
			<View style={styles.priceContainer}>
				<Text style={styles.coinPrice}>${currentPrice}</Text>
				<Text style={styles.coinSubPrice}>{priceChangePercent}%</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 16,
	},
	titleContainer: {},
	leftContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	coinTitle: {},
	image: {
        width: 40,
        height: 40,
    },
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	coinPrice: {},
	coinSubPrice: {},
});

export default Chart;
