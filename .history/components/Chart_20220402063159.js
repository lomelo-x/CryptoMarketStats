import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function Chart({
	currentPrice,
	priceChangePercent,
	coinLogo,
	coinName,
	coinAbbreviation,
}) {
	const priceChangePercentColor = priceChangePercent > 0 ? 'green' : 'red';

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<View style={styles.coinTitle}>
					<Image source={{ uri: coinLogo }} style={styles.image} />
					<Text style={styles.coinTitle}>
						{coinName} ({coinAbbreviation.toUpperCase()})
					</Text>
				</View>
				<Text style={styles.days}>7d</Text>
			</View>
			<View style={styles.priceContainer}>
				<Text style={styles.coinPrice}>
					${currentPrice.toLocaleString('en-US', { currency: 'USD' })}
				</Text>
				<Text style={[styles.coinSubPrice, { color: priceChangePercentColor }]}>
					{priceChangePercent.toFixed(3)}%
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 16,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	coinTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		color: 'grey',
	},
	days: {
		color: 'grey',
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 4,
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
        m
	},
	coinPrice: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	coinSubPrice: {
		fontSize: 18,
	},
});

export default Chart;
