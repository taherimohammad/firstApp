import React, { useContext, useState } from "react";
import { useReducer } from "react";

const CounterContext = React.createContext(); // state
const CounterContextDispatcher = React.createContext(); //setSate
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "mines":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterProvider = ({ children }) => {
  const [count, setCount] = useReducer[(useReducer, initialState)];
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCounter = () => useContext(CounterContext);
export const useCountActions = () => {
  const setCount = useContext(CounterContextDispatcher);
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return { addOne, addFive };
};
