import {zSing} from '@storage/pin';
import {Text, View} from 'react-native';

const Code = () => {
  const sign = zSing(({sign}) => sign);
  return (
    <View
      style={{
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 50}}>{sign}</Text>
    </View>
  );
};

export default Code;
