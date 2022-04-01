import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

function ListItem(props) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image
						style={styles.image}
						source={{
							uri: 'https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg',
						}}
					/>
					<View style={styles.titleContainer}>
						<Text></Text>
					</View>
				</View>
				<View style={styles.rightContainer}></View>
				<Text>List Item</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {},
	image: {},
	leftContainer: {},
	rightContainer: {},
	titleContainer: {},
});

export default ListItem;
