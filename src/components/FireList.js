import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Link, useParams } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import Servis from "./funkc/servisni";
import Search from "./Search";

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

  //list
  const ref = firebase
    .firestore()
    .collection("polja")
    .orderBy(SORTER[sortBy].column, SORTER[sortBy].direction)
    .limit(PAGER[displayMax].Max);
  //
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
    val.published = !val.published;
    let tmp = items.filter((item) => item.id !== val.id);
    console.log(tmp);
    tmp.push(val);
    console.log(val);
    setItems(tmp);

    Servis.update(val)
      .then(() => {
        console.log("kontakt dodan u omiljene");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //search

  //
  useEffect(() => {
    getEm();
  }, [sortBy, displayMax]);

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
      {loading ? <h1>Loading...</h1> : null}
      {items.map((val) => (
        <div key={val.id}>
          <p>
            {
              <input
                type="checkbox"
                value={val.published}
                onChange={() => addFav.toString(val)}
              />
            }
            {val.Ime} {val.Prezime} {val.favorite}
            <Link to={`/kontakt/detalji/${val.id}`}> ajd </Link>
          </p>
        </div>
      ))}

      <Search items={items} />
    </div>
  );
}
