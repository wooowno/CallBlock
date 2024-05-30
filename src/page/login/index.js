import Page from '@cmp/page';
import Pin from '@cmp/pin';
import Title from '@cmp/title';
import login from './fn';

const Login = ({navigation}) => {
  return (
    <Page title="Вход" nav={navigation} about={true} back={false}>
      <Title up="Введите пароль" />
      <Pin fn={login} nav={navigation} />
    </Page>
  );
};

export default Login;
