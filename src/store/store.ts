// src/store/store.ts

import create, { SetState } from 'zustand';

interface PlayerStore {
  playerState: string;
  setPlayerState: (newState: string) => void;
}

interface countNumber {
  count: number
  theNumber: string
  setNumber: (newnumber: number) => void;
  setString: (newState: string) => void;

}
const useStore = create<PlayerStore>((set: SetState<PlayerStore>) => ({
  playerState: 'حي الحين',
  setPlayerState: (newState: string) => set({ playerState: newState }),
}));

export const count = create<countNumber>((set: SetState<countNumber>) => ({
  count: 0,
  theNumber: 'تحت المعاينة',
  setNumber: (newnumber: number) => set({ count: newnumber }),
  setString: (newState: string) => set({ theNumber: newState }),

}))

export default useStore;
