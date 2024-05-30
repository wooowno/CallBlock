import {StyleSheet} from 'react-native';
import {View} from 'react-native';

export default Arrea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.area}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 40,
    borderStyle: 'solid',
    borderColor: '#b8daf7',
    borderWidth: 4,
  },
});
