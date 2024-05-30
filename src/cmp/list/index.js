const { FlatList, View, Text, Pressable, StyleSheet } = require('react-native');
import zList from '@src/storage/list';

const List = () => {
	const { list, setList } = zList((state) => state);
	const white = zList(({ white }) => white);
	const black = zList(({ black }) => black);
	return (
		<View style={{ marginLeft: 20, marginRight: 20 }}>
			<Pressable style={styles.btn} onPress={() => setList(!list)}>
				<Text style={styles.text}>
					{list ? 'Белый список' : 'Чёрный список'}
				</Text>
			</Pressable>
			<FlatList
				style={{ height: 500 }}
				data={list ? white : black}
				renderItem={({ item }) => <Phone contact={item} />}
			/>
		</View>
	);
};

export default List;

const Phone = ({ contact }) => {
	return (
		<View style={styles.phone}>
			{contact?.name && (
				<Text style={{ width: '40%', ...styles.ph_text }}>
					{contact.name}
				</Text>
			)}
			<Text style={{ width: '40%', ...styles.ph_text }}>
				{contact.number}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: 200,
		height: 50,
		backgroundColor: '#dd9787',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	text: {
		textTransform: 'uppercase',
	},
	phone: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		marginBottom: 5,
		gap: 5,
		height: 30,
	},
	ph_text: {
		borderColor: 'black',
		borderWidth: 1,
		paddingLeft: 5,
	},
});
