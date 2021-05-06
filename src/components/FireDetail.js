import React, { useState, useEffect } from "react";
import firebase from "./firebase";
// import { Link } from "react-router-dom";
import ContactUpdate from "./ContactUpdate";

export default function FireDetail({ match }) {
  // console.log(match);
  // console.log(match.params.id);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState();

  const theId = match.params.id;
  // console.log(theId);

  const getIt = () => {
    setLoading(true);
    const docRef = firebase
      .firestore()
      .collection("polja")
      .doc(theId)
      .get()
      .then((doc) => {
        setItem(doc.data());
      });
    //
    //
    setLoading(false);
  };
  useEffect(() => {
    getIt();
  }, [match]);

  if (loading) {
    return <h3>samo malo...</h3>;
  }

  return (
    <div className="container">
      <div>
        {/* {console.log("item: ", item)} */}
        Kontakt: tip - email
        <p> {item.Kontakt}</p>
      </div>
      <div>
        <p>Datum rodjenja: {item.Datum}</p>
        {item.Prezime} {item.Ime} {theId}
      </div>
      <ContactUpdate item={item} id={theId} />
    </div>
  );
}
