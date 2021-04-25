import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Link, useParams } from "react-router-dom";
import { _ } from "lodash";
//
const SORTER = {
  "Prezime A-Z": { column: "Prezime", direction: "asc" },
  "Prezime Z-A": { column: "Prezime", direction: "desc" },
  "Email A-Z": { column: "Kontakt", direction: "asc" },
};
const PAGER = {
  15: { Max: "15" },
  30: { Max: "30" },
  45: { Max: "45" },
};

export default function FireList() {
  const [items, setItems] = useState([]);
  // const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Prezime A-Z");
  const [displayMax, setDisplayMax] = useState("15");
  const [query, setQuery] = useState();

  const ref = firebase
    .firestore()
    .collection("polja")
    // .orderBy("Kontakt")
    .orderBy(SORTER[sortBy].column, SORTER[sortBy].direction)
    .limitToLast(PAGER[displayMax].column);
  // console.log(ref);
  function getEm() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
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
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
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
            {val.Ime} {val.Prezime}
            <Link to={`/kontakt/detalji/${val.id}`}> ajd </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
