import {useEffect} from 'react';
import CallDetectorManager from 'react-native-call-detection';
import Contacts from 'react-native-contacts';
import zList from '@src/storage/list';

const detectCall = () => {
  const addBlack = zList(({addBlack}) => addBlack);

  useEffect(() => {
    callListener();
  }, []);

  const callListener = () => {
    callDetector = new CallDetectorManager((event, number) => {
      Contacts.getContactsByPhoneNumber(number)
        .then(cnt => {
          if (cnt.length) return;
          addBlack(number);
        })
        .catch(console.warn);
    }, true);
  };
};

export default detectCall;
