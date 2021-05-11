import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Servis from "./funkc/servisni";
import { Link } from "react-router-dom";

export default function Omiljeni() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  //list
  const refFav = firebase
    .firestore()
    .collection("polja")
    .where("favorite", "==", true);
  //
  function getFavs() {
    setLoading(true);
    refFav.get().then((querySnapshot) => {
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
  //review fav status
  const toggleFav = (val) => {
    val.favorite = !val.favorite;
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

  //
  useEffect(() => {
    getFavs();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      {items.map((val) => (
        <div key={val.id}>
          <p>
            {
              <input
                type="checkbox"
                value={val.favorite}
                onChange={() => toggleFav(val)}
              />
            }
            {val.Ime} {val.Prezime} {val.favorite}
            <Link to={`/kontakt/detalji/${val.id}`}> ajd </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
