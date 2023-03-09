import { useProductsActions } from "../providers/ProductsProvider";
import { useState } from "react";
import SelectComponent from "../../common/select/SelectComponent";
import style from "./filter.module.css";
import SearchBar from "../../common/search/Search";

const Filter = () => {
  const dispatch = useProductsActions();
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const filterOptions = [
    { value: "", label: "ALL" },
    { value: "S", label: "S" },
    { value: "L", label: "L" },
    { value: "M", label: "M" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const handleChangeFilter = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sortValue });
    setFilterValue(selectedOption.value);
  };

  const sortOptions = [
    { value: "highest", label: "Highest" },
    { value: "lowest", label: "Lowest" },
  ];
  const handleChangeSort = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    // dispatch({ type: "filter", selectedOption: filterValue });
    setSortValue(selectedOption.value);
  };

  return (
      <>
    <SearchBar filter={filterValue}/>
    <div className={style.filterTop}>
      <h3>Filter products </h3>
        <SelectComponent
          title={'size'}
          options={filterOptions}
          onChange={handleChangeFilter}
        />
        <SelectComponent
          title={'price'}
          options={sortOptions}
          onChange={handleChangeSort}
        />
    </div>
      </>
  );
};

export default Filter;
