import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  about: {
    width: 130,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,

    //box shadow
  },
  text: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
});
