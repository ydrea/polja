import React, { useState } from "react";
import firebase from "./firebase";
import Servis from "./funkc/servisni";
// import { Link } from "react-router-dom";
// import { collection, query, where, getDocs } from "firebase/firestore";

export default function FireDetail() {
  const [item, setItem] = useState("");

  firebase
    .firestore()
    .collection("polja")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      // function ajD (){
      if (!snapshot.empty) {
        const data = snapshot.docs.map((doc) => {
          const id = doc.id;
          console.log(id);
        });
      }
    });

  // const deleteItem = () => {
  //   Servis.db.remove(item);
  // };
  return (
    <div>
      <div>
        <ul>
          nes
          {/* <li>{item.Ime},</li>
          {item.Prezime}, {item.Datum}, {item.Kontakt} */}
        </ul>
        to
      </div>
      {/* <button onClick={deleteItem}>Delete</button> */}

      {/* <button onClick={updateItem}>Delete</button> */}
    </div>
  );
}
