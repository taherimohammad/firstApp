import { useReducer } from "react";
import { useState } from "react";

const CountReducer = () => {
  //   const [count, setCount] = useState(0);

  //   const addOne = () => {
  //     setCount(count + 1);
  //   };

  //   const addFive = () => {
  //     setCount(count + 5);
  //   };

  //   const minesOne = () => {
  //     setCount(count - 1);
  //   };

  //   const initialState = {
  //     firstCount: 0,
  //     secondCount: 0,
  //   };

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
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>firstCount : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        addFirstOne
      </button>
      <button onClick={() => dispatch({ type: "mines", value: 1 })}>
        minesFirstOne
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <h2>secondCount : {countTwo}</h2>
      <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
        addSecondOne
      </button>
      <button onClick={() => dispatchTwo({ type: "mines", value: 1 })}>
        minesSecondOne
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CountReducer;
