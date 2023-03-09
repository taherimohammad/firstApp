import moduleTest from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { useContext } from "react";
// import { UserContext, WebsiteContext } from "../../App";

const Product = ({ product, onChange, onDecrece, onPluse, onDelete }) => {
  // const user = useContext(UserContext);
  // const website = useContext(WebsiteContext);
  // console.log(user, website);
  return (
    <div className={moduleTest.card}>
      <div>
        <p>name: {product.name}</p>
      </div>
      <div className={moduleTest.center}>
        <p>price: {product.price}</p>
        <span className={moduleTest.value}>{product.count}</span>
      </div>
      {/* <input type="text" value={product.name} onChange={onChange} /> */}
      <div>
        <button
          className={`${moduleTest.btn} ${
            product.count === 1 && moduleTest.remove
          }`}
          onClick={onDecrece}
        >
          {product.count > 1 ? "-" : <BiTrash />}
        </button>
        <button
          className={`${moduleTest.btn} ${moduleTest.pluseBtn}`}
          onClick={onPluse}
        >
          +
        </button>
        <button className={moduleTest.btn} onClick={onDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
