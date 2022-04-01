import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, sa } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
      <StatusBar style="auto" />
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Markets!</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
  titleContainer: {
    marginTop: 20,
  }
});
