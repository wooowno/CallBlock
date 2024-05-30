import {View} from 'react-native';

import styles from './styles';
import Header from './header';
import Footer from './footer';

export default Page = ({title, nav, back = false, about = true, children}) => {
  return (
    <View style={styles.page}>
      <Header title={title} />
      <View>{children}</View>
      <Footer about={about} back={back} nav={nav} />
    </View>
  );
};
