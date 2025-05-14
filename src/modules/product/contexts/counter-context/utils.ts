import { FilterContextActionsReducer, FilterContextState } from "./types";

/**
 * @description Reducer for the filter context
 * @param state - The current state of the filter context
 * @param action - The action to be performed
 * @returns The new state of the filter context
 */
export function actionsReducer(
  state: FilterContextState,
  action: FilterContextActionsReducer
) {
  switch (action.type) {
    case "setTotalSelected":
      return {
        ...state,
        totalSelected: action.payload,
      };
    case "setSearch":
      return {
        ...state,
        search: action.payload,
      };
    case "setPage":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}

export const initialState: FilterContextState = {
  totalSelected: 0,
  search: "",
  page: 0,
};
