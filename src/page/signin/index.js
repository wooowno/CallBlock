const {View, Text, StyleSheet, Pressable} = require('react-native');
import Logo from '@cmp/logo';
import Code from './code';
import Back from '@src/cmp/back';
import About from '@src/cmp/about';
import zPin, {zSing} from '@storage/pin';

const Signin = ({navigation}) => {
  return (
    <View>
      <Logo />
      <View style={styles.v_about}>
        <Text style={styles.t_about}>Вы зарегистрированы</Text>
      </View>
      <Code />
      <Confirm navigation={navigation} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Back navigation={navigation} />
        <About navigation={navigation} />
      </View>
    </View>
  );
};

export default Signin;

const Confirm = ({navigation}) => {
  const setPin = zPin(({setPin}) => setPin);
  const sign = zSing(({sign}) => sign);
  return (
    <View style={styles.v_confirm}>
      <Pressable
        style={styles.p_confirm}
        onPress={() => {
          setPin(sign);
          navigation.navigate('Main');
        }}>
        <Text style={{textTransform: 'uppercase'}}>Подтвердить</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  v_about: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  t_about: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
  v_confirm: {
    height: 150,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  p_confirm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    backgroundColor: '#a0beff',
  },
});
