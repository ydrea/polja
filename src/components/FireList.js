import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Link, useParams } from "react-router-dom";
import { Icon } from "semantic-ui-react";

//
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
  const [query, setQuery] = useState("");

  // function routeTo() {
  //   const { id } = useParams();
  // }

  const ref = firebase
    .firestore()
    .collection("polja")
    .orderBy(SORTER[sortBy].column, SORTER[sortBy].direction)
    .limitToLast(PAGER[displayMax].column);
  // console.log(ref);
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
      // console.log(items);
      setLoading(false);
    });
  }

  const addToFavorites = () => {
    console.log("fav");
  };

  useEffect(() => {
    getEm();
  }, [query, sortBy, displayMax]);

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
      <ul>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
      </ul>
      {loading ? <h1>Loading...</h1> : null}

      {items.map((val) => (
        <div key={val.id}>
          <p>
            {<Icon classname="star outline" onclick={addToFavorites()} />}
            {val.Ime} {val.Prezime}
            <Link to={`/kontakt/detalji/${val.id}`}> ajd </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
