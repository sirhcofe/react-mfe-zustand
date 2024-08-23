import { create } from "zustand";

interface SharedStore {
  number: number;
  setNumber: (data: number) => void;
}

const useSharedStore = create<SharedStore>()((set, get) => ({
  number: 0,
  setNumber: (data: number) => {
    set(() => ({ number: data }));
  },
}));

export default useSharedStore;
