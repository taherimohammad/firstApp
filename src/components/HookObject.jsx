import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const firstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  return (
    <form>
      <h1>FirstName:{user.firstName}</h1>
      <h1>LastName:{user.lastName}</h1>
      <input
        type="text"
        value={user.firstName}
        onChange={firstNameHandler}
      ></input>
      <hr />
      <input
        type="text"
        value={user.lastName}
        onChange={lastNameHandler}
      ></input>
    </form>
  );
};

export default HookObject;
