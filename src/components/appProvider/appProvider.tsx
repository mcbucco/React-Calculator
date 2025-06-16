import { useReducer } from "react";
import { AppContext, initialState } from "./appContext";
import { reducer } from "../tools/reducer";

interface IAppProviderProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
