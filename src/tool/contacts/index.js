import Contacts from 'react-native-contacts';
import zList from '@src/storage/list';

function getContacts() {
  const setWhite = zList(({setWhite}) => setWhite);
  Contacts.getAll()
    .then(cnt => {
      cnt = cnt.map(el => ({
        name: el.displayName,
        numbers: el.phoneNumbers,
      }));
      cnt = cnt.filter(el => el.numbers.length);
      cnt = cnt.map(el => ({name: el.name, number: el.numbers.at(0).number}));
      setWhite(cnt);
    })
    .catch(console.warn);
}

export default getContacts;
