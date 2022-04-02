import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { SAMPLE_DATA } from './assets/sampleData';
import ListItem from './components/ListItem';

export default function App() {
	return (
		<BottomSheetModalProvider></BottomSheetModalProvider>
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
						priceChangePercent={item.price_change_percentage_7d_in_currency}
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
