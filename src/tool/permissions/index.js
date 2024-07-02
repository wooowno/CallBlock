import {PermissionsAndroid} from 'react-native';

// Получение разрешений
async function requestPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    ]);
    const grt = granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    // TODO обработка отказа в доступе
    console.warn(err);
    return false;
  }
}

export default requestPermission;
