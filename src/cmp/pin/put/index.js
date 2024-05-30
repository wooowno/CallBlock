import {View, Text, StyleSheet, Pressable} from 'react-native';

const Put = ({code, setCode}) => {
  function onPress(num) {
    if (num == '<<') return setCode(code.slice(0, -1));
    if (num == ' ' || code.length == 4) return;
    setCode(code + num);
  }
  let list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '<<'];
  list = list.map((el, i) => <Cell key={i} num={el} onPress={onPress} />);
  return (
    <View
      style={{
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 20,
        width: 280,
      }}>
      {list}
    </View>
  );
};

export default Put;

const Cell = ({num, onPress}) => {
  const style = num === ' ' ? styles.no : styles.cell;
  return (
    <Pressable style={style} onPress={() => onPress(num)}>
      <Text style={{fontSize: 30}}>{num}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 80,
    height: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  no: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
