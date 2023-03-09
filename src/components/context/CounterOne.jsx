import { useCounter, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCounter();
  const dispatch = useCountActions();

  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      {/* <button onClick={addFive}>add five</button> */}
    </div>
  );
};

export default CounterOne;
