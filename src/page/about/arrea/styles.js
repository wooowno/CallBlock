import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  area: {
    width: '90%',
    height: 500,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#b8daf7',
    borderWidth: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: 'flex',
    gap: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});
