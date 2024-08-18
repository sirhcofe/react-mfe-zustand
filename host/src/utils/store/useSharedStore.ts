import { create } from "zustand";
import { subscribeWithSelector, persist } from "zustand/middleware";
import { SharedStore } from "../type";

const channel = new BroadcastChannel("zustand_store_channel");

const useSharedStore = create<SharedStore>()(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        number: 0,
        setNumber: (data: number) => {
          set(() => ({ number: data }));
          channel.postMessage(data);
        },
      }),
      {
        name: "shared-storage",
      }
    )
  )
);

channel.onmessage = (event) => {
  useSharedStore.setState({ number: event.data });
};

export default useSharedStore;
