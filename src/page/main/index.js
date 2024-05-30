import Page from '@cmp/page';
import getContacts from '@tool/contacts';
import zList from '@src/storage/list';
import Toggle from './toggle';
import List from './list';
import {useEffect} from 'react';

const Main = ({navigation}) => {
  useEffect(() => {
    getContacts();
  }, []);
  const {list, setList} = zList(state => state);
  const title = list ? 'Белый список' : 'Чёрный список';
  return (
    <Page title={title} nav={navigation} about={true} back={false}>
      <Toggle setList={setList} title={title} />
      <List list={list} />
    </Page>
  );
};

export default Main;
