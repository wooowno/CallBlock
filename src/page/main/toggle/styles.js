import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  toggle: {
    width: 130,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
  },
  text: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
});
