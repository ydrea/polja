// import "./App.css";
import "firebase/firestore";
import "firebase/auth";
import firebase from "./firebase";
// import { enableIndexedDbPersistence } from "firebase/firestore";
import { BrowserRouter, Route } from "react-router-dom";

//COMPONENTS
import ContactEdit from "./ContactEdit";
import Header from "./Header";
import FireList from "./FireList";

import FireDetail from "./FireDetail";
// import Formak from "./Formak";

import { AuthProvider } from "./auth/Auth";
import Login from "./auth/Login";
import Welcome from "./Welcome";
// import ContactUpdate from "./ContactUpdate";

//...
function App() {
  const ref = firebase.firestore().collection("polja");
  //
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          login
          <div>
            {/* <Formak /> */}
            <Login />
            <Welcome />
          </div>
          <Route path="/" exact component={Header} />
          <Route path="/adresar" component={FireList} />
          <Route path="/kontakt" exact component={ContactEdit} />
          <Route path="/kontakt/detalji/:id" component={FireDetail} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
