import {NativeModules} from 'react-native';
const {BlockNumberModule} = NativeModules; // нативный модуля из android\app\src\main\java\com\callblock

// Блокирует переданные номер телефона
export default blockNumber = phoneNumber => {
  BlockNumberModule.blockNumber(phoneNumber, (error, success) => {
    if (error) {
      console.error('Failed to block number:', error);
    } else if (success) {
      console.log('Number blocked successfully');
    }
  });
};
