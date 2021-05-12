import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const SORTER = {
  "Prezime A-Z": { column: "Prezime", direction: "asc" },
  "Prezime Z-A": { column: "Prezime", direction: "desc" },
  "Email A-Z": { column: "Kontakt", direction: "asc" },
};
const PAGER = {
  "max 5": { Max: "5" },
  "max 30": { Max: "30" },
  "max 45": { Max: "45" },
};

export default function FireList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Prezime A-Z");
  const [displayMax, setDisplayMax] = useState("max 5");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //fav box
  const icon = React.createElement("i", { className: "mdi mdi-check" });
  const newIcon = React.cloneElement(icon, {
    ...icon.props,
    // merge classNames with icon
    className: icon.props.className + " icon",
  });
  //list
  const ref = firebase
    .firestore()
    .collection("polja")
    .orderBy(SORTER[sortBy].column, SORTER[sortBy].direction)
    .limit(PAGER[displayMax].Max);

  function getEm() {
    setLoading(true);
    ref.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const item = {
          ...doc.data(),
          id: doc.id,
        };
        items.push(item);
      });
      setItems(items);
      console.log(items);
      setLoading(false);
    });
  }
  //favorite
  const addFav = (val) => {
    val.favorite = !val.favorite;
    let tmp = items.filter((item) => item.id !== val.id);
    console.log(tmp);
    tmp.push(val);
    console.log(val);
    setItems(tmp);

    const aRef = firebase.firestore().collection("polja").doc(val.id);
    aRef.update({ favorite: val.favorite });
    console.log("kontakt dodan u omiljene");
  };

  //search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = items.filter((tmp) =>
      tmp.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   setSearchTerm(event.target.value);
  //   findEm();
  // };

  // const refSearch = firebase
  //   .firestore()
  //   .collection("polja")
  //   .where("Ime" || "Prezime" || "Kontakt", ">=", searchTerm);
  // console.log(searchTerm);
  // const findEm = () => {
  //   setLoading(true);
  //   refSearch.get().then((querySnapshot) => {
  //     const itemS = [];
  //     querySnapshot.forEach((doc) => {
  //       const its = {
  //         ...doc.data(),
  //         id: doc.id,
  //       };
  //       itemS.push(its);
  //     });
  //     setItemS(itemS);
  //     console.log(itemS);
  //     setLoading(false);
  //   });
  // };
  // //
  useEffect(() => {
    getEm();
  }, [sortBy, displayMax]);
  // //

  return (
    <div>
      <div className="container">
        <div>
          {" "}
          <label>Poredaj</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.currentTarget.value)}
          >
            <option value="Prezime A-Z"> Prezime A-Z </option>
            <option value="Prezime Z-A"> Prezime Z-A </option>
            <option value="Email A-Z"> Email A-Z </option>
          </select>
        </div>
        <div>
          <label> Max. po stranici </label>
          <select
            value={displayMax}
            onChange={(e) => setDisplayMax(e.currentTarget.value)}
          >
            <option value="max 5">5</option>
            <option value="max 30">30</option>
            <option value="max 45">45</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Trazi"
            name="search"
            value={searchTerm}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      {loading ? <h1>Loading...</h1> : null}

      {!searchTerm
        ? items.map((val) => (
            <div className="container" key={val.id}>
              <p>
                {
                  <Checkbox
                    className="pretty p-image p-plain"
                    name="tac"
                    // value="" {...val.favorite}
                    value={val.favorite}
                    onChange={() => addFav(val)}
                    icon={
                      <img
                        src="https://cdn.nohat.cc/thumb/f/720/m2i8H7H7G6m2d3b1.jpg"
                        alt="i"
                      />
                    }
                  />
                }
                {val.Ime} {val.Prezime} {val.favorite.toString()}
                <Link to={`/kontakt/detalji/${val.id}`}> detalji </Link>
              </p>
            </div>
          ))
        : items.map((val) => (
            <div className="container" key={val.id}>
              <p>
                {val.Ime} {val.Prezime}
                <Link to={`/kontakt/detalji/${val.id}`}> detalji </Link>
              </p>
            </div>
          ))}
    </div>
  );
}
