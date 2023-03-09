import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const RefFunc = () => {
  const previousValue = useRef();
  const [inputValue, setInputValue] = useState("");
  const onchangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  // const onClickHandler = () => {
  //   setInputValue("");
  //   previousValue.current.focus();
  // };

  useEffect(() => {
    previousValue.current = inputValue; // update after rerender dom
  }, [inputValue]);
  return (
    <div>
      <input type="text" onChange={onchangeHandler} value={inputValue} />
      <p>curent:{inputValue}</p>
      <p>previous:{previousValue.current}</p>
      {/*<input
        type="text"
        onChange={onchangeHandler}
        value={inputValue}
        ref={previousValue}
      /> 
      <button onClick={onClickHandler}>reset</button>*/}
    </div>
  );
};

export default RefFunc;
