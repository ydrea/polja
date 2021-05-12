import React, { useState } from "react";
import firebase from "./../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  // validate
  async function handleSubmit(event) {
    event.preventDefault();

    const validate = () => {
      let emailError = "";
      let passwordError = "";

      if (
        !password.length > 5 &&
        !password.match(/\d+/g) &&
        !password.string.test("+", "-", "!", "#", "$")
      ) {
        setPasswordError = "password too weak";
      }

      if (!email.includes("@")) {
        setEmailError = "invalid email";
      }

      if (emailError || passwordError) {
        setState({ emailError, passwordError });
        return false;
      }

      return true;
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const isValid = validate();
      if (!isValid) {
        setState(initialState);
      }
    };

    //

    try {
      await login(email, password);
      history.push("/adresar");
    } catch (e) {
      alert(e.message);
    }
  }

  // const resetInput = () => {
  //   setEmail("");
  //   setPassword("");
  // };

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
        <button className="btn primary" onClick={handleSubmit}>
          Login
        </button>
        {/* <button onClick={logOut}>Log Out</button> */}
      </div>
    </>
  );
};

export default Login;
