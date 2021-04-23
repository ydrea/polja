import React from "react";
import firebase from "./firebase";
// import { Link } from "react-router-dom";

export default function FireDetail({ item }) {
  const deleteItem = () => {
    const fireRef = firebase.database().ref("polja").child(item.id);
    fireRef.remove();
  };
  const updateItem = () => {
    const updates = {};
    updates[`polja/`] = true;
    updates[`polja/`] = firebase.database.ServerValue.increment(1);
    firebase.database().ref().update(updates);
  };
  return (
    <div>
      <div>
        <ul>
          <li>{item.Ime},</li>
          {item.Prezime}, {item.Datum}, {item.Kontakt}
        </ul>
      </div>
      <button onClick={deleteItem}>Delete</button>

      <button onClick={updateItem}>Delete</button>
    </div>
  );
}
