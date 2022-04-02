import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
<<<<<<< HEAD:App.js
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { SAMPLE_DATA } from './assets/sampleData';
import ListItem from './components/ListItem';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Markets</Text>
			</View>
			<View style={styles.divider} />
			<FlatList
				keyExtractor={(item) => item.id}
				data={SAMPLE_DATA}
				renderItem={({ item }) => (
					<ListItem
						coinName={item.name}
						coinAbbreviation={item.symbol}
						currentPrice={item.current_price}
<<<<<<< HEAD:App.js
						priceChangePercent={item.price_change_percentage_7d_in_currency}
=======
						priceChangePercent={
							item.price_change_percentage_7d_in_currency
						}
>>>>>>> 4c6c624c63f2964bd8a49e9b0e83cd16a015ded2:CryptoWatch/App.js
						coinLogo={item.image}
					/>
				)}
			/>
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
