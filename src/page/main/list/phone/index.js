import {View, Text} from 'react-native';
import styles from './styles';

export default Phone = ({name, number}) => {
  return (
    <View style={styles.phone}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};
