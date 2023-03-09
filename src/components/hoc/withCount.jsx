import { useState } from "react";

const WithCount = (WrapperComponent, value) => {
  const UpdateCount = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + value);
    };
    return <WrapperComponent count={count} increment={increment} {...props} />;
  };

  return UpdateCount;
};

export default WithCount;
