import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);
  const addItemHandler = () => {
    setItem([
      ...item,
      { id: item.length, number: Math.floor(Math.random() * 10) },
    ]);
  };
  return (
    <div>
      <button onClick={addItemHandler}>add item</button>
      {item.map((x) => {
        return <p key={x.id}>{x.number}</p>;
      })}
    </div>
  );
};

export default HookArray;
