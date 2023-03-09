import React, { useState } from "react";

import "./App.css";
import ProductList from "./components/productList/ProductList";
import NavBar from "./components/navBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/providers/ProductsProvider";
import Filter from "./components/filter/Filter";


const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
