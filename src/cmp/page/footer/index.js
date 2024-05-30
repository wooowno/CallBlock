import About from '@cmp/about';
import Back from '@cmp/back';
import Empty from '@cmp/empty';
import styles from './styles';
import {View} from 'react-native';

const Footer = ({about, back, nav}) => {
  const b = back ? <Back navigation={nav} /> : <Empty />;
  const a = about ? <About navigation={nav} /> : <Empty />;
  return (
    <View style={styles.footer}>
      {b}
      {a}
    </View>
  );
};

export default Footer;
