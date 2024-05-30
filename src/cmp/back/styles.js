import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  back: {
    width: 65,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 32.5,

    //box shadow
  },
  text: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
});
