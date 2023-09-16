"use client"

import React, { createContext, useContext, useState } from "react";

type TState = {
  result: any;
  addResult: (newResult: any) => void;
  clearResult: () => void;
};

const INITIAL_STATE: TState = {
  result: null,
  addResult: () => {}, 
  clearResult: () => {}, 
};

const ResultsContext = createContext(INITIAL_STATE);

export const ResultsProvider = ({ children }: any) => {
  const [result, setResult] = useState(INITIAL_STATE.result);

  const addResult = (newResult: any) => {
    setResult(newResult);
  };

  const clearResult = () => {
    setResult(INITIAL_STATE.result);
  };

  return (
    <ResultsContext.Provider value={{ result, addResult, clearResult }}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResults = () => {
  return useContext(ResultsContext);
};
