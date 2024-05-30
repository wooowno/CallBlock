import {View, Text} from 'react-native';
import styles from './styles';

const Cell = ({num}) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.num}>{num}</Text>
    </View>
  );
};

export default Cell;
