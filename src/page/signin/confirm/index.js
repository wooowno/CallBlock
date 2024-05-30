const {Text, Pressable} = require('react-native');
import styles from './styles';
import zPin, {zSing} from '@storage/pin';

export default Confirm = ({nav}) => {
  const setPin = zPin(({setPin}) => setPin);
  const sign = zSing(({sign}) => sign);
  return (
    <Pressable
      style={styles.confirm}
      onPress={() => {
        setPin(sign);
        nav.navigate('Main');
      }}>
      <Text style={styles.text}>Подтвердить</Text>
    </Pressable>
  );
};
