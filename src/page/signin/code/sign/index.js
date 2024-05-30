import {View} from 'react-native';
import {zSing} from '@storage/pin';
import Cell from '../cell';

export default Sign = () => {
  let sign = zSing(({sign}) => sign);
  sign = sign.split('');
  sign = sign.map((el, i) => <Cell num={el} key={i} />);
  return (
    <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>{sign}</View>
  );
};
