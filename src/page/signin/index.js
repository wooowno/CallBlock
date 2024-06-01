import Page from '@cmp/page';
import Code from './code';
import Confirm from './confirm';
import {View} from 'react-native';
import zPin from '@storage/pin';
import {useEffect} from 'react';

const Signin = ({navigation}) => {
  const pin = zPin(({pin}) => pin);

  useEffect(() => {
    if (pin) navigation.navigate('Main');
  }, [pin]);
  return (
    <Page title="Справка" nav={navigation} about={true} back={true}>
      <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
        <Code />
        <Confirm />
      </View>
    </Page>
  );
};

export default Signin;
