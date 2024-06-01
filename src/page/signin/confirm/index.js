const {Text, Pressable} = require('react-native');
import styles from './styles';
import zPin, {zSing} from '@storage/pin';

const Confirm = () => {
  const setPin = zPin(({setPin}) => setPin);
  const sign = zSing(({sign}) => sign);

  return (
    <Pressable
      style={styles.confirm}
      onPress={() => {
        setPin(sign);
      }}>
      <Text style={styles.text}>Подтвердить</Text>
    </Pressable>
  );
};

export default Confirm;
