import React, { useState } from "react";
import Product from "../product/Product";
import { useProducts, useProductsActions } from "../providers/ProductsProvider";
// class ProductList extends React.Component {
//   render() {
//     return (
//       <div className="container" id="title">
//         {this.props.products.length ? (
//           this.props.products.map((item, index) => {
//             return (
//               <Product
//                 product={item}
//                 key={index}
//                 onDelete={() => this.props.onDelete(item.id)}
//                 onPluse={() => this.props.onPluse(item.id)}
//                 onDecrece={() => this.props.onDecrece(item.id)}
//                 onChange={(e) => this.props.onChange(e, item.id)}
//               />
//             );
//           })
//         ) : (
//           <div>Empty</div>
//         )}
//       </div>
//     );
//   }
// }

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();
  return (
    <div className="container" id="title">
      {products.length ? (
        products.map((item, index) => {
          return (
            <Product
              product={item}
              key={index}
              onDelete={() => dispatch({ type: "remove", id: item.id })}
              onPluse={() => dispatch({ type: "pluse", id: item.id })}
              onDecrece={() => dispatch({ type: "decrece", id: item.id })}
              onChange={(e) =>
                dispatch({ type: "change", id: item.id, event: e })
              }
            />
          );
        })
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default ProductList;
