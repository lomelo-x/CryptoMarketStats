import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Chart({
	currenPrice,
	priceChangePercent,
	coinLogo,
	coinName,
	coinAbbreviation,
}) {
	return (
		<View style={styles.container}>
			<Text>CHART</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default Chart;
