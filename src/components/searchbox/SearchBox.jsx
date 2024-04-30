import { changeFilter } from "../../redux/filtersSlice";
import { selectFilterInput } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchBoxData = useSelector(selectFilterInput);

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxLabel}>Find contacts by name:</p>
      <input
        type="text"
        value={searchBoxData}
        onChange={(event) => {
          const userInput = event.target.value;
          dispatch(changeFilter(userInput));
        }}
      />
    </div>
  );
};

export default SearchBox;
