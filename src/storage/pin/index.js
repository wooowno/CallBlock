import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

// Хранилище пинкода
const zPin = create(
  persist(
    (set, get) => ({
      pin: '',
      setPin: pin => set({pin}),
    }),
    {
      name: 'pin-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

// Хранилище для регистрации
export const zSing = create((set, get) => ({
  sign: '',
  setSign: sign => set({sign}),
}));

export default zPin;
