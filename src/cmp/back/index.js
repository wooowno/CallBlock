const {Pressable, Text, StyleSheet} = require('react-native');
import styles from './styles';

// Кнопка возвращения на прошлую страницу
const Back = ({navigation}) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.back,
        backgroundColor: pressed ? '#A1C2DF' : '#b0d6f8',
      })}
      onPress={() => {
        navigation.goBack();
      }}>
      <Text style={styles.text}>{'<<'}</Text>
    </Pressable>
  );
};

export default Back;
