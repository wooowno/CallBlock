import Page from '@cmp/page';
import Code from './code';
import Confirm from './confirm';
import {View} from 'react-native';

const Signin = ({navigation}) => {
  return (
    <Page title="Справка" nav={navigation} about={true} back={true}>
      <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
        <Code />
        <Confirm nav={navigation} />
      </View>
    </Page>
  );
};

export default Signin;
