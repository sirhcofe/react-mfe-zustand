import { create } from "zustand";

interface LocalStore {
  number: number;
  setNumber: (data: number) => void;
}

const useLocalStore = create<LocalStore>()((set, get) => ({
  number: 0,
  setNumber: (data: number) => {
    set(() => ({ number: data }));
  },
}));

export default useLocalStore;
