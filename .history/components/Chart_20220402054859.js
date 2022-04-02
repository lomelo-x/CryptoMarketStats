import React from 'react';
import { View, StyleSheet, Text, I } from 'react-native';

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
                    <Image
                </View>
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
