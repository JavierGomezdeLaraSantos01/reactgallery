import React from "react";
import { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setsearchEntry] = useState("");

  const updateSearchInput = (e) => {
    setsearchEntry(e.target.value);
  };

  return (
    <form
      className="search-form"
      onSubmit={(e) => handleSubmit(e, history, searchEntry)}
    >
      <input
        type="text"
        name="search"
        placeholder="Buscar..."
        onChange={updateSearchInput}
        value={searchEntry}
      ></input>
      <button
        type="submit"
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
      >
        Buscar
      </button>
    </form>
  );
};
export default Form;