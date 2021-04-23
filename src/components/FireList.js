import React, { useState, useEffect } from "react";
import firebase from "./firebase";
const SORTER = {
  "Prezime A-Z": { column: "Prezime", direction: "asc" },
  "Prezime Z-A": { column: "Prezime", direction: "desc" },
  "Email A-Z": { column: "Kontakt", direction: "asc" },
};

export default function FireList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [query, setQuery] = useState();

  const ref = firebase
    .firestore()
    .collection("polja")

    .orderBy(SORTER[sortBy].column, SORTER[sortBy].direction)
    .limitToLast(15);
  console.log(ref);
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
          <h2>{i.Id}</h2>
          <p>
            {i.Ime} {i.Prezime}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}

// if (sortBy == "Prezime A-Z") {
//   items.Prezime.sort((a, b) => {
//     return a.Prezime > b.Prezime;
//   });
// } else if (sortBy == "Prezime Z-A") {
//   items.Prezime.sort((b, a) => {
//     return a.Prezime > b.Prezime;
//   });
// } else if (sortBy == "Email A-Z") {
//   items.Kontakt.sort((a, b) => {
//     return a.Kontakt > b.Kontakt;
//   });
// } else
