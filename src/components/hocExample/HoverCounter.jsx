import WithCount from "../hoc/withCount";
const HoverCounter = ({ count, increment }) => {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <h2 onMouseOver={increment}>hover{count} time</h2>
    </div>
  );
};

export default WithCount(HoverCounter, 5);
