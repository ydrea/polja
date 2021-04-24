import React, { useState } from "react";
import firebase from "./firebase";
import Servis from "./funkc/servisni";
import { _ } from "lodash";
import useQueryString from "./funkc/useAhook";

// import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function FireDetail() {
  const [item, setItem] = useState("");
  const [quirky, funKy] = useQueryString("");

  firebase.firestore().collection("polja");
  //
  // .doc(doc.id)
  // .get()
  // .then((doc) => {
  //   setItem(doc.data());
  // });

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
