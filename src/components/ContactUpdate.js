import Servis from "./funkc/servisni";
import React, { useState, useEffect } from "react";

export default function ContactUpdate(props) {
  const initialState = {
    ime: props.item.Ime,
    prezime: props.item.Prezime,
    datum: props.item.Datum,
    kontakt: props.item.Kontakt,
    id: props.Id,
  };

  const [theItem, setTheItem] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    setTheItem(props.item);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTheItem({ ...theItem, [name]: value });
    console.log(theItem);
  };

  const updateItem = (theItem) => {
    let data = {
      ime: theItem.ime,
      prezime: theItem.prezime,
      kontakt: theItem.kontakt,
      datum: theItem.datum,
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

  return (
    <div className="container">
      {console.log(("theItem", props, theItem))}
      {theItem ? (
        <div className="edit-form">
          <h4>Kontakt</h4>
          <form>
            <div className="form-group">
              <label htmlFor="ime">Ime</label>
              <input
                type="text"
                className="form-control"
                name="Ime"
                value={theItem.Ime}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prezime">Prezime</label>
              <input
                type="text"
                className="form-control"
                name="Prezime"
                value={theItem.Prezime}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="datum">Datum</label>
              <input
                type="text"
                className="form-control"
                name="Datum"
                value={theItem.Datum}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="kontakt">Kontakt</label>
              <input
                type="text"
                className="form-control"
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
