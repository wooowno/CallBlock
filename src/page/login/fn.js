import {useEffect} from 'react';
import zPin from '@src/storage/pin';

export default function login(code, setCode, nav) {
  const {pin} = zPin(state => state);
  useEffect(() => {
    if (code.length == 4 && pin == code) {
      nav.navigate('Main');
    } else if (code.length == 4) {
      setCode('');
    }
  }, [code]);
}
