import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


type TState= {
    user: string | null
    isFetching: Boolean,
    error: Boolean,
    
}

const userFromLocalStorage =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") as string) || null
    : null;


const INITIAL_STATE:TState = {
  user:userFromLocalStorage ,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(state.user));
      }
  
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
    >
      {children}
    </Context.Provider>
  );
};
