import React from "react";
// import firebase from "../firebase";
import { Link } from "react-router-dom";
import FireDetail from "./FireDetail";

export default function FireItem({ item }) {
  const [userDetails, setUserDetails] = useState("");
  db.collection("users")
    .doc(id)
    .get()
    .then((snapshot) => setUserDetails(snapshot.data()));

  return (
    <div>
      <h6>
        {item.Ime}, {item.Prezime} {item.id}, {item.Kontakt}
      </h6>
      <Link to={`/kontakt/detalji/{${item.id}}`}> ajd </Link>
      <div style={{ display: "none" }}>
        info
        <FireDetail item={item} />
      </div>
    </div>
  );
}
