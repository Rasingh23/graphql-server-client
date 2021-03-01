/*
 * Store initialization
 */

import React from "react";
import reducer from "./reducer";
import { IState } from "./interface";
const initialState: IState = {
  categories: [],
  randomjoke: ""
};

export const Store = React.createContext<IState | any>(initialState);

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
      {/* {console.log("PROPS: " + JSON.stringify(props))} */}
    </Store.Provider>
  );
}
