import { ReactNode } from "react";

export interface CounterContextProviderProps {
  children: ReactNode;
}

export interface CounterContextProps {
  totalSelected: number;
  incrementTotalSelected: () => void;
  decrementTotalSelected: () => void;
}
