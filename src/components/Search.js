import React, { useState, useEffect } from "react";

export default function Search({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(items);
  //search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // //
  //   const seaRch = (items) => {
  //     let tmp = searchResults.filter((val) => val.includes(searchTerm));
  //     console.log(tmp);
  //   };
  // //

  //   import SourceData from "./SourceData.json";

  //   class App extends React.Component {
  //     state = {
  //       value: "",
  //       sourceData: SourceData,
  //       filterData: []
  //     };

  //     handleChange = e => {
  //       this.setState({
  //         filterData: this.state.sourceData
  //       });
  //     };

  //     filterList = e => {
  //       const updatedList = this.state.sourceData.filter(item => {
  //         return (
  //           item.continent.toLowerCase().search(e.target.value.toLowerCase()) !== -1
  //         );
  //       });
  //       this.setState({ filterData: updatedList });
  //     };

  //     render() {
  //       const searchBox = (
  //         <input
  //           type="text"
  //           onClick={this.handleChange}
  //           onChange={this.filterList}
  //         />
  //       );
  //       const selectBox = this.state.filterData.map(option => (
  //         <li key={option.continent}>{option.continent}</li>
  //       ));

  //       return (
  //         <React.Fragment>
  //           <h2>Step 1</h2>
  //           <h3>Select a continent.</h3>
  //           {searchBox}
  //           {selectBox && <ul>{selectBox}</ul>}
  //         </React.Fragment>
  //       );
  //     }
  //   }

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
          name="search"
          value={searchTerm}
          onChange={handleSearch}
        ></input>
      </ul>
    </div>
  );
}
