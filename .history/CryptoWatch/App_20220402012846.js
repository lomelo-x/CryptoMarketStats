import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import 

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Markets</Text>
			</View>
      <View style={styles.divider}/>
      <ListItem />
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
