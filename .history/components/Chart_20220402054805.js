import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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
				<Text style={styles.coinTitle}>{coinName}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
    titleContainer: {},
    coinTitle: {},
});

export default Chart;
