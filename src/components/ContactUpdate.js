import Servis from "./funkc/servisni";
import React, { useState, useEffect } from "react";

export default function ContactUpdate(props) {
  const initialState = {
    ime: props.item.Ime,
    prezime: props.item.Prezime,
    datum: props.item.Datum,
    kontakt: props.item.Kontakt,
    favorite: props.item.favorite,
    id: props.id,
  };
  console.log(props);

  const [theItem, setTheItem] = useState();
  const [message, setMessage] = useState();
  const [daLje, setDalje] = useState();

  useEffect(() => {
    setTheItem(props.item);
    console.log(theItem);
  }, [daLje]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTheItem({ ...theItem, [name]: value });
    console.log(theItem, props.id);
  };

  const handleDalje = (e) => {
    // console.log("dalje");
    setDalje({
      daLje: e.target.checked,
    });
  };

  const updateItem = () => {
    let data = {
      Ime: theItem.Ime,
      Prezime: theItem.Prezime,
      Kontakt: theItem.Kontakt,
      Datum: theItem.Datum,
      favorite: theItem.favorite,
      id: props.id,
    };

    Servis.update(props.id, data)
      .then(() => {
        setMessage("Uspjesno ste izmijenili unos!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteItem = () => {
    Servis.remove(props.id)

      .then(() => {
        setMessage("Uspjesno ste uklonili unos!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      {/* {console.log(("theItem", props.id, theItem))} */}
      <input type="checkbox" checked={daLje} onChange={handleDalje} />
      {daLje ? (
        <div className="edit-form">
          <h4>Kontakt</h4>
          <form>
            <div className="form-group">
              <label htmlFor="Ime">Ime</label>
              <input
                type="text"
                className="form-control"
                name="Ime"
                value={theItem.Ime}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Prezime">Prezime</label>
              <input
                type="text"
                className="form-control"
                name="Prezime"
                value={theItem.Prezime}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Datum">Datum</label>
              <input
                type="date"
                className="form-control"
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
                name="Kontakt"
                value={theItem.Kontakt}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group" value={theItem.favorite}>
              <label>Status: </label>
            </div>
          </form>

          <button onClick={deleteItem}>Delete</button>
          <p>{message}</p>

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
