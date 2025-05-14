"use client";

import { createContext, useMemo, useState } from "react";

import { CounterContextProviderProps, CounterContextProps } from "./types";

export const CounterContext = createContext<CounterContextProps | null>(null);

export function CounterContextProvider({
  children,
}: CounterContextProviderProps) {
  const [totalSelected, setTotalSelected] = useState(0);

  const incrementTotalSelected = () => setTotalSelected((prev) => prev + 1);

  const decrementTotalSelected = () => {
    if (!totalSelected) return;

    setTotalSelected(totalSelected - 1);
  };

  const value = useMemo(
    () => ({
      totalSelected,
      incrementTotalSelected,
      decrementTotalSelected,
    }),
    [totalSelected]
  );

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
