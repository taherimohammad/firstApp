import WithCount from "../hoc/withCount";
const ClickCounter = ({ count, increment }) => {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h2 onClick={increment}>click{count} time</h2>
    </div>
  );
};

export default WithCount(ClickCounter, 10);
