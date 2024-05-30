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
      cnt = cnt.map(el => {
        let name = el.name;
        if (name.length > 20) name = name.slice(0, 19) + '...';
        return {name: name, number: el.numbers.at(0).number};
      });
      cnt = cnt.sort((a, b) => a.name.localeCompare(b.name));
      setWhite(cnt);
    })
    .catch(console.warn);
}

export default getContacts;
