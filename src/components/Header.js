import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./auth/Auth";
import Login from "./auth/Login";
import { useHistory } from "react-router-dom";
import firebase from "./firebase";

export default function Header() {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : "";
  const history = useHistory();

  const logOut = () => {
    firebase.auth().signOut();
  };
  async function handleLogout() {
    await logOut();

    history.push("/login");
  }

  return (
    <div className="App-header">
      {currentUserEmail ? (
        <div className="container">
          <button className="btn-primary" onClick={handleLogout}>
            Log Out
          </button>
          {`Welcome ${currentUserEmail}`}
          <nav>
            {" "}
            <div>
              <Link to="/kontakt">Kontakt</Link>
            </div>
            <div>
              <Link to="/adresar">Adresar</Link>
            </div>
            <div>
              <Link to="/omiljeni">Omiljeni</Link>
            </div>
          </nav>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
