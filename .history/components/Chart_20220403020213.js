import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import {
	ChartDot,
	ChartPath,
	ChartPathProvider,
	ChartYLabel,
} from '@rainbow-me/animated-charts';

export const { width: SIZE } = Dimensions.get('window');

function Chart({
	currentPrice,
	priceChangePercent,
	coinLogo,
	coinName,
	coinAbbreviation,
	sparkline,
}) {
	const formatUSD = (value) => {
		'worklet';
		if (value === '') {
			return '';
		}
		return `$ ${value.toLocaleString('en-US', {
			currency: 'USD',
		})}`;
	};

	const priceChangePercentColor = priceChangePercent > 0 ? 'green' : 'red';

	return (
		<ChartPathProvider data={{ points: sparkline, smoothStrategy: 'bezier' }}>
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
					<ChartYLabel
						format={formatUSD}
						style={{ backgroundColor: 'black', color: 'green', margin: 4 }}
					/>
					<Text style={styles.coinPrice}>
						${currentPrice.toLocaleString('en-US', { currency: 'USD' })}
					</Text>
					<Text
						style={[styles.coinSubPrice, { color: priceChangePercentColor }]}
					>
						{priceChangePercent.toFixed(3)}%
					</Text>
				</View>
				<View style={styles.chartContainer}>
					<ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
					<ChartDot style={{ backgroundColor: 'black' }} />
				</View>
			</View>
		</ChartPathProvider>
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
		paddingTop: 4,
		marginLeft: 4,
	},
	coinPrice: {
		
		fontSize: 24,
		fontWeight: 'bold',
	},
	coinSubPrice: {
		fontSize: 18,
	},
	chartContainer: {
		marginTop: 40,
	},
});

export default Chart;
