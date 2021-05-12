import "../CSS/style.css";
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
import Omiljeni from "./Omiljeni";
// import ContactUpdate from "./ContactUpdate";

import { AuthProvider } from "./auth/Auth";
import Login from "./auth/Login";

//...
function App() {
  const ref = firebase.firestore().collection("polja");

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
          </div>
          <Route path="/adresar" component={FireList} />
          <Route path="/kontakt" exact component={ContactEdit} />
          <Route path="/kontakt/detalji/:id" component={FireDetail} />
          <Route path="/omiljeni" component={Omiljeni} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
