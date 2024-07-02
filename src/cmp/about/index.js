import {Pressable, Text} from 'react-native';
import styles from './styles';

// Кнопка для перехода на справку
const About = ({navigation}) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.about,
        backgroundColor: pressed ? '#A1C2DF' : '#b0d6f8',
      })}
      onPress={() => navigation.navigate('About')}>
      <Text style={styles.text}>Справка</Text>
    </Pressable>
  );
};

export default About;
