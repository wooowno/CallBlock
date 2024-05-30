import {Text, View} from 'react-native';
import styles from './styles';

const Title = ({up, down}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.up}>{up}</Text>
      <Text style={styles.down}>{down}</Text>
    </View>
  );
};

export default Title;
