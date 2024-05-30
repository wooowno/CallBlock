import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 20,
  },
  point: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  check: {
    backgroundColor: '#d3e3fb',
  },
  fill: {
    backgroundColor: '#ffd4fb',
  },
});
