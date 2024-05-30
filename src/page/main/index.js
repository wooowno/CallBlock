import {View, StyleSheet} from 'react-native';
import Logo from '@cmp/logo';
import List from '@cmp/list';
import About from '@cmp/about';
import getContacts from '@tool/contacts';

const Main = ({navigation}) => {
  getContacts();
  return (
    <View>
      <Logo />
      <List />
      <View style={styles.about}>
        <About navigation={navigation} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  about: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});
