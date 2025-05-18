import { useState } from "react";
//import searchIcon from "../../assets/searchIcon.svg";
import styles from "./Search.module.css";
//import navbarStyles from "../Navbar/Navbar.module.css";

import { ReactComponent as SearchIcon } from "../../assests/searchIcon.svg";


const SearchBar = ({ placeholder }) => {
  const [value, setValue] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form className="wrapper" onSubmit={onSubmit}>
        <input
          className="search"
          placeholder={placeholder}
          required
          value={value}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          {<SearchIcon />}{" "}
        </button>
      </form>
    </>
  );
};

export default SearchBar;
