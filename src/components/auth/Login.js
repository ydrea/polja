import React, { useState } from "react";
import firebase from "./../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const logOut = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await login(email, password);
      history.push("/adresar");
    } catch (e) {
      alert(e.message);
    }
  }
  //   firebase.auth().signOut();
  // };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="inputBox">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Login</button>
        {/* <button onClick={logOut}>Log Out</button> */}
      </div>
    </>
  );
};

export default Login;
