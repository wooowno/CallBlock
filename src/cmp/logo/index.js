import { Text, View, StyleSheet } from 'react-native';

const Logo = () => {
	return (
		<View style={styles.container_logo}>
			<View style={styles.logo}>
				<Text style={styles.text}>ЛОГОТИП</Text>
			</View>
		</View>
	);
};

export default Logo;

const styles = StyleSheet.create({
	container_logo: {
		width: '100%',
		marginBottom: 50,
		marginTop: 70,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 150,
		height: 75,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#5A8EFF',
		textTransform: 'uppercase',
	},
	text: {
		fontSize: 25,
	},
});
