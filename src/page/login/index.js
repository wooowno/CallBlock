const {View, Text, Pressable} = require('react-native');
import Logo from '@cmp/logo';
import About from '@src/cmp/about';
import Pin from '@cmp/pin';
import login from './fn';

const Login = ({navigation}) => {
  return (
    <View>
      <Logo />
      <Text>Введите код</Text>
      <Pin fn={login} nav={navigation} />
      <About navigation={navigation} />
    </View>
  );
};

export default Login;
