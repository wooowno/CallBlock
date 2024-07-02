import Page from '@cmp/page';
import Pin from '@cmp/pin';
import Title from '@cmp/title';
import {zSing} from '@storage/pin';
import requestPermission from '@tool/permissions';
import auth from './fn';
import {useEffect} from 'react';

// Страница авторизации -> ввод пинкода
const Auth = ({navigation}) => {
  requestPermission(); // Получение пермишенов

  const sign = zSing(({sign}) => sign);

  useEffect(() => {
    if (sign) {
      navigation.navigate('Signin'); // Переход на страницу сохранения пинкода
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
