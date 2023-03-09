import {useState} from "react";
import style from './search.module.css';
import {useProductsActions} from "../../components/providers/ProductsProvider";
const SearchBar = ({filter}) => {
	const dispatch = useProductsActions();
	const [value, setValue] = useState('');
	const changeHandler = (e) => {
		dispatch({ type: "filter", selectedOption:filter });
		dispatch({ type: "search", value });
		setValue(e.target.value)
	}
	return (
		<div className={style.formControl}>
			<div>Search For :</div>
			<input type='text' placeholder='search for ...' value={value} onChange={changeHandler}/>
		</div>
	);
}

export default SearchBar;