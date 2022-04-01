import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Markets!</Text>
			</View>
      <View style={styles.divider]/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
  divider: {
    height: styleSheet.hairlineWidth,
    
  }
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	titleContainer: {
		marginTop: 50,
	},
});
