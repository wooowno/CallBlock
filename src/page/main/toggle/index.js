const {Text, Pressable, View} = require('react-native');
import styles from './styles';

export default Toggle = ({title, setList}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setList()}
        style={({pressed}) => ({
          ...styles.toggle,
          backgroundColor: pressed ? '#A1C2DF' : '#b0d6f8',
        })}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};
