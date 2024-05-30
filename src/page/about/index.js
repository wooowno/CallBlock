const {View, Text, StyleSheet} = require('react-native');
import Logo from '@cmp/logo';
import Back from '@src/cmp/back';

const About = ({navigation}) => {
  return (
    <View>
      <Logo />
      <View style={styles.v_about}>
        <Text style={styles.t_about}>Справка</Text>
      </View>
      <View style={styles.v_text}>
        <Text style={styles.t_text}>text</Text>
      </View>
      <View style={styles.v_back}>
        <Back navigation={navigation} />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  v_about: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  t_about: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
  v_text: {
    backgroundColor: '#E4E4E4',
    height: 500,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    padding: 20,
  },
  t_text: {
    fontSize: 17,
  },
  v_back: {
    paddingLeft: 20,
  },
});
