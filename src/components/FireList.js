import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
// import "../sCSS";

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
  const [itemS, setItemS] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Prezime A-Z");
  const [displayMax, setDisplayMax] = useState("max 5");
  const [searchTerm, setSearchTerm] = useState("");

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
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    findEm();
  };

  const refSearch = firebase
    .firestore()
    .collection("polja")
    .where("Ime", ">=", searchTerm);
  // .where("Prezime", ">=", searchTerm)
  // .where("Kontakt", ">=", searchTerm)
  console.log(searchTerm);
  const findEm = () => {
    setLoading(true);
    refSearch.get().then((querySnapshot) => {
      const itemS = [];
      querySnapshot.forEach((doc) => {
        const its = {
          ...doc.data(),
          id: doc.id,
        };
        itemS.push(its);
      });
      setItemS(itemS);
      console.log(itemS);
      setLoading(false);
    });
  };
  // //
  useEffect(() => {
    getEm();
  }, [sortBy, displayMax, searchTerm]);
  // //

  return (
    <div>
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
      {loading ? <h1>Loading...</h1> : null}

      {!searchTerm
        ? items.map((val) => (
            <div key={val.id}>
              <p>
                {
                  <div className="pretty p-image p-plain">
                    <input
                      type="checkbox"
                      value={val.favorite}
                      onChange={() => addFav(val)}
                    />
                    <div className="state">
                      <img className="image" src="../sCSS/star-16.png" />
                      <label> </label>
                    </div>
                  </div>
                }
                {val.Ime} {val.Prezime} {val.favorite.toString()}
                <Link to={`/kontakt/detalji/${val.id}`}> ajd </Link>
              </p>
            </div>
          ))
        : itemS.map((val) => (
            <div key={val.id}>
              <p>
                {val.Ime} {val.Prezime}
                <Link to={`/kontakt/detalji/${val.id}`}> ajd </Link>
              </p>
            </div>
          ))}
    </div>
  );
}
