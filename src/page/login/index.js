import Page from '@cmp/page';
import Pin from '@cmp/pin';
import Title from '@cmp/title';
import login from './fn';
import zPin from '@storage/pin';
import {useEffect} from 'react';

const Login = ({navigation}) => {
  const pin = zPin(({pin}) => pin);

  useEffect(() => {
    if (!pin) {
      navigation.navigate('Auth');
    }
  }, [pin]);

  return (
    <Page title="Вход" nav={navigation} about={true} back={false}>
      <Title up="Введите пароль" />
      <Pin fn={login} nav={navigation} />
    </Page>
  );
};

export default Login;
