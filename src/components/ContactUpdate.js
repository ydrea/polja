import Servis from "./funkc/servisni";
import React, { useState } from "react";

export default function ContactUpdate(props) {
  //
  console.log(props.item);
  //
  const initialState = {
    id: null,
    ime: "",
    prezime: "",
    imeError: "",
    prezimeError: "",
    date: "",
    kontakt: "",
    kontaktError: "",
    published: false,
  };

  const [theItem, setTheItem] = useState(initialState);
  const [imeError, setImeError] = useState();
  const [prezimeError, setPrezimeError] = useState();
  const [message, setMessage] = useState();

  const { item } = props;
  if (theItem.id !== item.id) {
    setTheItem(item);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTheItem({ ...theItem, [name]: value });
  };

  const updatePublished = (status) => {
    Servis.update(theItem.id0, { published: status })
      .then(() => {
        setTheItem({ ...theItem, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateItem = () => {
    let data = {
      Ime: theItem.ime,
      Prezime: theItem.prezime,
      Kontakt: theItem.kontakt,
      Datum: theItem.date,
      published: true,
    };

    Servis.update(theItem.id, data)
      .then(() => {
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteItem = () => {
    Servis.remove(theItem.id)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // //
  // const saveContact = () => {
  //   let data = {
  //     Ime: theItem.ime,
  //     Prezime: theItem.prezime,
  //     Kontakt: theItem.kontakt,
  //     Datum: theItem.date,
  //     published: true,
  //   };

  //   Servis.addItem(data)
  //     .then(() => {
  //       setState({
  //         submitted: true,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const validate = () => {
    let imeError = "";
    let kontaktError = "";

    if (!theItem.ime) {
      imeError = "obavezan unos imena!";
    }

    if (!theItem.kontakt) {
      imeError = "obavezan unos kontakta!";
    }

    if (kontaktError || imeError) {
      this.setState({ kontaktError, imeError });
      return false;
    }

    return true;
  };

  return (
    <div className="container">
      {theItem ? (
        <div className="edit-form">
          <h4>Kontakt</h4>
          <form>
            <div className="form-group">
              <label htmlFor="ime">Ime</label>
              <input
                type="text"
                className="form-control"
                // id="title"
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
                // id="description"
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
                // id="description"
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
                // id="description"
                name="Kontakt"
                value={theItem.Kontakt}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {theItem.published ? "Published" : "Pending"}
            </div>
          </form>

          {theItem.published ? (
            <button onClick={() => updatePublished(false)}>UnPublish</button>
          ) : (
            <button onClick={() => updatePublished(true)}>Publish</button>
          )}

          <button onClick={deleteItem}>Delete</button>

          <button type="submit" onClick={updateItem}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}{" "}
    </div>
  );
}
