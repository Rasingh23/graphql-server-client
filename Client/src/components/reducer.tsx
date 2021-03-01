/*
 * Reducer Function
 */

import { IState, IAction } from "./interface";

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "FETCH_JOKE":
      return { ...state, randomjoke: action.payload };
    default:
      return state;
  }
}
