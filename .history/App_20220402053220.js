import { StatusBar } from 'expo-status-bar';
import React, { useRef, useMemo, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { SAMPLE_DATA } from './assets/sampleData';
import ListItem from './components/ListItem';
import Chart from './components/Chart';

export default function App() {
	const [selectedCoinData, setSelectedCoinData] = React.useState(null);
	const bottomSheetModalRef = useRef(null);

	const snapPoints = useMemo(() => ['33%'], []);

	const openModal = (item) => {
		setSelectedCoinData(item);
		bottomSheetModalRef.current.present();
	};
	return (
		<BottomSheetModalProvider>
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
							onPress={() => openModal(item)}
						/>
					)}
				/>
			</SafeAreaView>
			<BottomSheetModal
				style={styles.bottomSheetModal}
				ref={bottomSheetModalRef}
				index={0}
				snapPoints={snapPoints}
			>
				<View style={styles.contentContainer}>
					<Chart
						currentPrice={setSelectedCoinData.current_price}
						coinLogo={item.image}
						coinName={item.name}
					/>
				</View>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
}

const styles = StyleSheet.create({
	bottomSheetModal: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
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
