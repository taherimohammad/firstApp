import { useProducts } from "../providers/ProductsProvider";
import shoppingStyle from "./navBar.module.css";

const NavBar = () => {
  const products = useProducts();
  const totalCount = products.filter((p) => p.count > 0).length;
  return (
    <header className={shoppingStyle.navBar}>
      <h3>My SHopping</h3>
      <span>{totalCount}</span>
    </header>
  );
};

export default NavBar;
