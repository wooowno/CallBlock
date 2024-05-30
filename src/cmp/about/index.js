import { Pressable, Text, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
	return (
		<Pressable
			style={styles.button}
			onPress={() => navigation.navigate('About')}
		>
			<Text style={styles.text}>Справка</Text>
		</Pressable>
	);
};

export default About;

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 50,
		backgroundColor: '#A0BEFF',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textTransform: 'uppercase',
	},
});
