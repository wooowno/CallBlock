import {useEffect} from 'react';
import CallDetectorManager from 'react-native-call-detection';
import Contacts from 'react-native-contacts';
import zList from '@src/storage/list';
import block from '@tool/block';

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
          block(number);
          addBlack(number);
        })
        .catch(console.warn);
    }, true);
  };
};

export default detectCall;
