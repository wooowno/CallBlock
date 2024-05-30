import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Put = ({code, setCode}) => {
  function onPress(num) {
    if (num == '<<') return setCode(code.slice(0, -1));
    if (num == ' ' || code.length == 4) return;
    setCode(code + num);
  }
  let list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '<<'];
  list = list.map((el, i) => <Cell key={i} num={el} onPress={onPress} />);
  return <View style={styles.put}>{list}</View>;
};

export default Put;

const Cell = ({num, onPress}) => {
  const style = num === '' ? styles.no : styles.cell;
  return (
    <Pressable
      style={({pressed}) => ({
        ...style,
        backgroundColor: pressed ? '#A1C5E5' : '#b0d6f8',
      })}
      onPress={() => onPress(num)}>
      <Text style={styles.num}>{num}</Text>
    </Pressable>
  );
};
