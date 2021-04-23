import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Link, useParams } from "react-router-dom";
//
const SORTER = {
  "Prezime A-Z": { column: "Prezime", direction: "asc" },
  "Prezime Z-A": { column: "Prezime", direction: "desc" },
  "Email A-Z": { column: "Kontakt", direction: "asc" },
};

export default function FireList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Prezime A-Z");
  const [query, setQuery] = useState();

  const ref = firebase
    .firestore()
    .collection("polja")
    // .orderBy("Kontakt")
    .orderBy(SORTER[sortBy].column, SORTER[sortBy].direction)
    .limitToLast(15);
  // console.log(ref);
  function getEm() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setItems(items);
      console.log(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getEm();
  }, [query, sortBy]);

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
      <ul>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
      </ul>
      {loading ? <h1>Loading...</h1> : null}
      {items.map((i) => (
        <div key={i.id}>
          <h2>{i.id}</h2>
          <p>
            {i.Ime} {i.Prezime}{" "}
            <Link to={`/kontakt/detalji/{${i.id}}`}> ajd </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
