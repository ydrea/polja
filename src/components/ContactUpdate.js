import Servis from "./funkc/servisni";
import React, { useState, useEffect } from "react";

export default function ContactUpdate(props) {
  //
  console.log(props.item);
  //
  const initialState = {
    ime: props.item.Ime,
    prezime: props.item.Prezime,
    date: props.item.Datum,
    kontakt: props.item.Kontakt,
  };

  const [theItem, setTheItem] = useState(initialState);
  const [message, setMessage] = useState();

  console.log(theItem);

  useEffect(() => {
    const { item } = props;
    setTheItem(item);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTheItem({ ...theItem, [name]: value });
    console.log(theItem);
  };

  const updateItem = (theItem) => {
    let data = {
      Ime: theItem.Ime,
      Prezime: theItem.Prezime,
      Kontakt: theItem.Kontakt,
      Datum: theItem.Datum,
    };

    Servis.update(theItem.id, data)
      .then(() => {
        setMessage("Uspjesno ste izmijenili unos!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteItem = () => {
    Servis.remove(theItem.id).catch((e) => {
      console.log(e);
    });
  };
  //

  //

  return (
    <div className="container">
      {console.log(("theItem", theItem))}
      {theItem ? (
        <div className="edit-form">
          <h4>Kontakt</h4>
          <form>
            <div className="form-group">
              <label htmlFor="ime">Ime</label>
              <input
                type="text"
                className="form-control"
                // id={theItem.id}
                name="ime"
                value={theItem.Ime}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Prezime">Prezime</label>
              <input
                type="text"
                className="form-control"
                // id={theItem.id}
                name="Prezime"
                value={theItem.Prezime}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Datum">Datum</label>
              <input
                type="text"
                className="form-control"
                // id={theItem.id}
                name="Datum"
                value={theItem.Datum}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Kontakt">Kontakt</label>
              <input
                type="text"
                className="form-control"
                // id={theItem.id}
                name="Kontakt"
                value={theItem.Kontakt}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
            </div>
          </form>

          <button onClick={deleteItem}>Delete</button>

          <button type="submit" onClick={updateItem}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Odaberi jedan broj...</p>
        </div>
      )}{" "}
    </div>
  );
}
