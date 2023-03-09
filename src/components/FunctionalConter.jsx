import { useEffect } from "react";
import { useState } from "react";

const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(() => {
    console.log("every time");
  });
  useEffect(() => {
    console.log("with dependenci");
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={clickHandler}>count : {count}</button>
    </div>
  );
};

export default FunctionalCounter;
