import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

const zPin = create(
  persist(
    (set, get) => ({
      first: true,
      setFirst: () => set({first: false}),
      pin: '',
      setPin: pin => set({pin}),
    }),
    {
      name: 'pin-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const zSing = create((set, get) => ({
  sign: '',
  setSign: sign => set({sign}),
}));

export default zPin;
