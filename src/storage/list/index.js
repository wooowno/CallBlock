import {create} from 'zustand';

const zList = create((set, get) => ({
  list: true,
  setList: () => set(({list}) => ({list: !list})),

  white: [],
  setWhite: list => set({white: list}),
  addWhite: n => set(state => ({white: [...state.white, n]})),

  black: [],
  setBlack: list => set({black: list}),
  addBlack: n => set(state => ({black: [...state.black, n]})),
  includesBlack: n =>
    get(({black}) => {
      const f = black.filter(obj => obj.number === n);
      return f.length > 0;
    }),
}));

export default zList;
