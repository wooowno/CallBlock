import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

// Хранилище для белого и чёрного списков
const zList = create(
  persist(
    (set, get) => ({
      list: true,
      setList: () => set(({list}) => ({list: !list})),

      white: [],
      setWhite: list => set({white: list}),

      black: [],
      addBlack: n => set(state => ({black: [...state.black, n]})),
    }),
    {
      name: 'list-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default zList;
