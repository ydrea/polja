import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Servis from "./funkc/servisni";

export default function FireDetail({ match }) {
  // console.log(match);
  // console.log(match.params.id);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection("polja")
      .where("id", "==", match.params.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          console.log(JSON.stringify(doc.data()));
          setItem(doc.data());
          console.log(item);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const deleteItem = () => {
    Servis.db.remove(item);
  };
  const updateItem = () => {
    Servis.db.update(item);
  };

  return (
    <div>
      <p>
        {item.Prezime}, {item.Ime}
      </p>
      <p> Rodjendan: {item.Datum}</p>

      <p> Kontakt: {item.Kontakt}</p>
      <div>
        <button onClick={deleteItem}>Izbrisi</button>
        <button onClick={updateItem}>Azuriraj</button>
      </div>
    </div>
  );
}
