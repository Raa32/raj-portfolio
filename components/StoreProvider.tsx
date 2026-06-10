"use client";

import { createContext, useContext } from "react";
import { useStore } from "zustand";
import {
  getAppStore,
  type PortfolioState,
  type PortfolioStore,
} from "@/lib/store";

const StoreContext = createContext<PortfolioStore | null>(null);

export function StoreProvider({
  store,
  children,
}: {
  store?: PortfolioStore;
  children: React.ReactNode;
}) {
  return (
    <StoreContext.Provider value={store ?? getAppStore()}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreApi(): PortfolioStore {
  const store = useContext(StoreContext);
  return store ?? getAppStore();
}

export function usePortfolioState<T>(selector: (state: PortfolioState) => T): T {
  return useStore(useStoreApi(), selector);
}
