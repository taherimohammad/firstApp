import Select from "react-select";
import style from "./select.module.css";

const SelectComponent = ({title,...rest}) => {
  return (
    <div className={style.filterContainer}>
      <p> By {title}</p>
      <Select
          {...rest}
          className={style.select}
      />
    </div>
  );
};

export default SelectComponent;
