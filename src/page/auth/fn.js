import {useEffect} from 'react';
import {zSing} from '@src/storage/pin';

export default function auth(code, setCode) {
  const {setSign} = zSing(state => state);
  useEffect(() => {
    if (code.length == 4) {
      setSign(code);
      setCode('');
    }
  }, [code]);
}
