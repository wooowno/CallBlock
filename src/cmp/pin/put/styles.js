import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  put: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    height: 410,
    width: 325,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderStyle: 'solid',
    borderColor: '#b8daf7',
    borderWidth: 4,
    padding: 18,
  },
  cell: {
    width: 80,
    height: 80,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  num: {
    fontSize: 37,
    fontFamily: 'Roboto',
    color: '#113759',
  },
  no: {
    width: 80,
    height: 80,
    opacity: 0,
  },
});
