import React, { useContext, createContext, ReactNode } from "react";
import useSharedStore from "../store/useSharedStore";
import { SharedStore } from "../type";

const SharedStateContext = createContext<SharedStore | undefined>(undefined);

interface SharedStateProviderProps {
  children: ReactNode;
}

export const SharedStateProvider: React.FC<SharedStateProviderProps> = ({
  children,
}) => {
  const store = useSharedStore();
  return (
    <SharedStateContext.Provider value={store}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = (): SharedStore => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};
