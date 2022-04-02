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
                <
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	titleContainer: {},
	leftContainer: {},
	coinTitle: {},
	image: {},
});

export default Chart;
