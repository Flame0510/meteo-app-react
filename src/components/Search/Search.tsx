import searchBtn from "../../assets/icons/search.png";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <h2 className="search-title">Search</h2>
      <div className="search-input-container">
        <input className="search-input" placeholder="ex: Miami" />
        <button className="search-input-button">
          <img
            className="search-input-button-icon"
            src={searchBtn}
            alt="search button"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
