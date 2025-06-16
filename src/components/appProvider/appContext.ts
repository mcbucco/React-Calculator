import type { IAppState } from "./../../types/types";
import React, { useContext } from "react";
import { createContext } from "react";
import type { TCalcActions } from "../tools/reducer";

interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<TCalcActions>;
}

export const initialState: IAppState = {
  inputBuffer: '',
  operand1: undefined,
  operand2: undefined,
  operator: undefined,
};

export const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
});

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext() должен использоваться внутри AppContextProvider"
    );
  }
  return context;
};
