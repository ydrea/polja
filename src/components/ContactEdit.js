import React from "react";
import Servis from "./funkc/servisni";

const initialState = {
  ime: "",
  prezime: "",
  imeError: "",
  prezimeError: "",
  date: "",
  kontakt: "",
  kontaktError: "",
  favorite: false,
  daLje: false,
};

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeIme = this.onChangeIme.bind(this);
    this.onChangePrezime = this.onChangePrezime.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeKontakt = this.onChangeKontakt.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.onChangeDalje = this.onChangeDalje.bind(this);

    this.state = initialState;
  }

  onChangeIme(e) {
    this.setState({
      ime: e.target.value,
    });
  }

  onChangePrezime(e) {
    this.setState({
      prezime: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeDalje(e) {
    // console.log("dalje");
    this.setState({
      daLje: e.target.checked,
    });
  }

  onChangeKontakt(e) {
    this.setState({
      kontakt: e.target.value,
    });
  }

  saveContact() {
    let data = {
      Ime: this.state.ime,
      Prezime: this.state.prezime,
      Kontakt: this.state.kontakt,
      Datum: this.state.date,
      favorite: true,
    };

    Servis.create(data)
      .then(() => {
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  validate = () => {
    let imeError = "";
    let kontaktError = "";

    if (!this.state.ime) {
      imeError = "obavezan unos imena!";
    }

    if (!this.state.kontakt) {
      imeError = "obavezan unos kontakta!";
    }

    if (kontaktError || imeError) {
      this.setState({ kontaktError, imeError });
      return false;
    }

    return true;
  };

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Kontakt uspjesno unesen!</h4>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="ime">ime</label>
              <input
                type="text"
                className="form-control"
                id="ime"
                required
                value={this.state.ime}
                onChange={this.onChangeIme}
                name="ime"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prezime">prezime</label>
              <input
                type="text"
                className="form-control"
                id="prezime"
                required
                value={this.state.prezime}
                onChange={this.onChangePrezime}
                name="prezime"
              />
            </div>
            <div>
              {" "}
              <div className="form-group">
                <label htmlFor="date">date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={this.state.date}
                  onChange={this.onChangeDate}
                  name="date"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={this.state.daLje}
                  onChange={this.onChangeDalje}
                />
                <label>Ako zelite unijeti kontakt...</label>
              </div>
            </div>
            {this.state.daLje ? (
              <div>
                <div className="form-group">
                  <label htmlFor="kontakt">kontakt</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kontakt"
                    required
                    value={this.state.kontakt}
                    onChange={this.onChangeKontakt}
                    name="kontakt"
                  />
                  <select>
                    <option> Email </option>
                    <option> Telefon </option>
                    <option> Mobitel </option>
                    <option> Pager </option>
                  </select>
                </div>

                <button onClick={this.saveContact} className="btn btn-success">
                  Submit
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
export default ContactEdit;
