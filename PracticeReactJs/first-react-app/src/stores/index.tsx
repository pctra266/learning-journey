import { create } from 'zustand'

const useData = create((set) => ({
  counter: 0,
  increaseConter: () => set((state) => ({ states: state.counter + 1 })),
  decreaseConter: () => set((state) => ({ states: state.counter - 1 })),
}))