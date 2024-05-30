import {View, Text, StyleSheet} from 'react-native';
import Logo from '@cmp/logo';
import Pin from '@src/cmp/pin';
import About from '@src/cmp/about';
import zPin from '@storage/pin';
import {zSing} from '@storage/pin';
import requestPermission from '@tool/permissions';
import auth from './fn';
import {useEffect} from 'react';

const Auth = ({navigation}) => {
  requestPermission();

  const pin = zPin(({pin}) => pin);
  const sign = zSing(({sign}) => sign);

  useEffect(() => {
    if (pin) {
      navigation.navigate('Login');
    }
  }, [pin]);

  useEffect(() => {
    if (sign) {
      navigation.navigate('Signin');
    }
  }, [sign]);

  return (
    <View>
      <Logo />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Text style={styles.t_reg}>Регистрация</Text>
        <Text style={styles.t_input}>Введите 4-х значный код</Text>
      </View>
      <Pin fn={auth} />
      <View style={styles.about}>
        <About navigation={navigation} />
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  t_reg: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  t_input: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  about: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});
