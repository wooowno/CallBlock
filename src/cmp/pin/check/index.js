import {View, StyleSheet} from 'react-native';
import styles from './styles';

const Check = ({len}) => {
  return (
    <View style={styles.container}>
      <Point style={len >= 1 ? 'fill' : 'check'} />
      <Point style={len >= 2 ? 'fill' : 'check'} />
      <Point style={len >= 3 ? 'fill' : 'check'} />
      <Point style={len >= 4 ? 'fill' : 'check'} />
    </View>
  );
};

export default Check;

const Point = ({style}) => {
  return <View style={{...styles[style], ...styles.point}}></View>;
};
