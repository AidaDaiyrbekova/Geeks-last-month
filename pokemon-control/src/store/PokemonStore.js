import { create } from 'zustand'

const usePokemonStore = create((set) => ({
  caught: [],
  add: (p) =>
    set((state) => {
      if (state.caught.find((x) => x.id === p.id)) return state
      return { caught: [...state.caught, p] }
    }),
  remove: (id) =>
    set((state) => ({
      caught: state.caught.filter((x) => x.id !== id),
    })),
  clear: () => set({ caught: [] }),
}))

export default usePokemonStore
