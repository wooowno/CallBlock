import Page from '@cmp/page';
import Pin from '@cmp/pin';
import Title from '@cmp/title';
import zPin from '@storage/pin';
import {zSing} from '@storage/pin';
import requestPermission from '@tool/permissions';
import auth from './fn';
import {useEffect} from 'react';

const Auth = ({navigation}) => {
  requestPermission();

  // const pin = zPin(({pin}) => pin);
  const sign = zSing(({sign}) => sign);

  // useEffect(() => {
  //   if (pin) {
  //     // navigation.navigate('Login');
  //   }
  // }, []);

  useEffect(() => {
    if (sign) {
      navigation.navigate('Signin');
    }
  }, [sign]);

  return (
    <Page title="Регистрация" nav={navigation} about={true} back={false}>
      <Title down="Введите 4-х значный код" />
      <Pin fn={auth} />
    </Page>
  );
};

export default Auth;
