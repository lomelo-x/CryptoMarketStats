import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import { SAMPLE_DATA } from './assets/data/sampleData';
import ListItem from './components/ListItem';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Markets</Text>
			</View>
			<View style={styles.divider} />
			<ListItem
				coinName={SAMPLE_DATA[0].name}
				coinAbbreviation={SAMPLE_DATA[0].symbol}
				currentPrice={SAMPLE_DATA[0].current_price}
				priceChangePercent={
					SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
				coinLogo={SAMPLE_DATA[0].image}
			/>

      <FlatList keyExtractor={}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	divider: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: 'lightgrey',
		marginHorizontal: 20,
		marginTop: 20,
	},
	title: {
		color: 'lightgrey',
		fontSize: 24,
		fontWeight: 'bold',
	},
	titleContainer: {
		marginTop: 65,
		paddingHorizontal: 20,
	},
});
