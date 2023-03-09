import { useState } from "react";
const AddCallback = () => {
  const [count, setCount] = useState(0);
  const [countByCallback, setCountByCallback] = useState(0);

  const addCount = () => {
    for (let i = 0; i < 3; i++) {
      setCount(count + 1);
    }
  };

  const addCountByCallback = () => {
    for (let i = 0; i < 3; i++)
      setCountByCallback((prevState) => {
        return prevState + 1;
      });
  };
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={addCount}>pluse</button>
      <p>count by callback : {countByCallback}</p>
      <button onClick={addCountByCallback}>pluse by callback</button>
    </div>
  );
};

export default AddCallback;
