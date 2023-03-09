import React, {useContext, useReducer} from "react";
import {productsData} from "../../db/product";
import _ from "lodash";

const ProductContext = React.createContext(); // state
const ProductContextDispatcher = React.createContext(); //setSate

const reducer = (state, action) => {
  switch (action.type) {
    case "pluse": {
      const index = state.findIndex((x) => x.id === action.id);
      const product = { ...state[index] };
      product.count++;
      const updateProducts = [...state];
      updateProducts[index] = product;
      return updateProducts;
    }
    case "remove": {
      return state.filter((x) => x.id !== action.id);
    }
    case "decrece": {
      const index = state.findIndex((x) => x.id === action.id);
      const product = { ...state[index] };
      if (product.count === 1) {
        return state.filter((x) => x.id !== action.id);
      } else {
        const updateProducts = [...state];
        product.count--;
        updateProducts[index] = product;
        return updateProducts;
      }
    }
    case "change": {
      const index = state.findIndex((x) => x.id === action.id);
      const product = { ...state[index] };
      product.name = action.event.target.value;
      const updateProducts = [...state];
      updateProducts[index] = product;
      return updateProducts;
    }
    case "filter": {
      if (action?.selectedOption?.value === "") {
        return productsData;
      }
      return productsData.filter(
          (item) => item.availableSizes.indexOf(action.selectedOption.value) >= 0
      );
    }
    case "sort": {
      const products = [...state];
      if (action.selectedOption.value === "highest") {
        return _.orderBy(products, ["price"], ["desc"]);
      } else {
        return _.orderBy(products, ["price"], ["asc"]);
      }
    }
    case "search": {
     if (action.value===''){
       return state;
     }else {
       return state.filter((p)=>
           p.name.toLowerCase().includes(action.value.toLowerCase())
       )
     }
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => useContext(ProductContextDispatcher);
// export const useProductsActions = () => {
//   return useContext(ProductContextDispatcher);
// const setProducts = useContext(ProductContextDispatcher);
// const products = useContext(ProductContext);

// const removeHandler = (id) => {
//   const filteredProduct = products.filter((x) => x.id !== id);
//   setProducts(filteredProduct);
// };

// const pluseHandler = (id) => {
//   const index = products.findIndex((x) => x.id === id);
//   const product = { ...products[index] };
//   product.count++;
//   const updateProducts = [...products];
//   updateProducts[index] = product;
//   setProducts(updateProducts);
// };

// const onChangeHandeler = (e, id) => {
//   const index = products.findIndex((x) => x.id === id);
//   const product = { ...products[index] };
//   product.name = e.target.value;
//   const updateProducts = [...products];
//   updateProducts[index] = product;
//   setProducts(updateProducts);
// };

// const decreceHandler = (id) => {
//   const index = products.findIndex((x) => x.id == id);
//   const product = { ...products[index] };
//   if (product.count == 1) {
//     const filteredProduct = products.filter((x) => x.id !== id);
//     setProducts(filteredProduct);
//   } else {
//     const updateProducts = [...products];
//     product.count--;
//     updateProducts[index] = product;
//     setProducts(updateProducts);
//   }
// };

// return { removeHandler, onChangeHandeler, decreceHandler, pluseHandler };
// };
