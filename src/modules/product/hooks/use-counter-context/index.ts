import { useContext } from "react";

import { CounterContext } from "../../contexts";

/**
 * @description Hook to use counter context
 * @returns {CounterContext} - Counter context
 */
export function useCounterContext() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      "useCounterContext must be used within a CounterContextProvider"
    );
  }

  return context;
}
