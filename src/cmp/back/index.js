const {Pressable, Text, StyleSheet} = require('react-native');

const Back = ({navigation}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        navigation.goBack();
      }}>
      <Text style={styles.text}>Вернуться</Text>
    </Pressable>
  );
};

export default Back;

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
