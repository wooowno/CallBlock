import {View, StyleSheet} from 'react-native';

const Check = ({len}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        margin: 20,
      }}>
      <Point style={len >= 1 ? 'fill' : 'check'} />
      <Point style={len >= 2 ? 'fill' : 'check'} />
      <Point style={len >= 3 ? 'fill' : 'check'} />
      <Point style={len >= 4 ? 'fill' : 'check'} />
    </View>
  );
};

export default Check;

const Point = ({style}) => {
  return <View style={styles[style]}></View>;
};

const styles = StyleSheet.create({
  check: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e4e4e4',
  },
  fill: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#7C9CE0',
  },
});
