import zList from '@src/storage/list';
import {FlatList, View} from 'react-native';
import Phone from './phone';
import styles from './styles';

// Вид списка
export default List = ({list}) => {
  let white = zList(({white}) => white);
  let black = zList(({black}) => black);
  white = (
    <FlatList
      //   style={styles.list}
      data={white}
      renderItem={({item}) => <Phone name={item.name} number={item.number} />}
    />
  );
  black = (
    <FlatList
      //   style={styles.list}
      data={black}
      renderItem={({item}) => <Phone number={item.number} />}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.list}>{list ? white : black}</View>
    </View>
  );
};
