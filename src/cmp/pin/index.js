import {useState} from 'react';
import {View} from 'react-native';
import Check from './check';
import Put from './put';

const Pin = ({fn, nav}) => {
  const [code, setCode] = useState('');
  if (fn) fn(code, setCode, nav);

  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Check len={code.length} />
      <Put code={code} setCode={setCode} />
    </View>
  );
};

export default Pin;
