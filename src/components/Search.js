import React, { useState, useEffect } from "react";

export default function Search({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(items);
  //search
  const handleSearch = (event) => {
    // event.preventDefault();
    setSearchTerm(event.target.value);
  };
  //
  if (searchTerm > 0) {
    items = items.filter((i) => {
      return i.name.match(searchTerm);
    });
  }
  //
  // const seaRch = (items) => {
  //   let tmp = searchResults.filter((items) => items.includes(searchTerm));
  //   console.log(tmp);
  //   setSearchResults(items);
  // };
  // //

  // //

  useEffect(() => {
    // seaRch();
  }, [searchTerm]);
  // //
  return (
    <div>
      <div>srch</div>
      <ul>
        <input
          type="text"
          placeholder="Trazi"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
        ></input>
      </ul>
    </div>
  );
}
