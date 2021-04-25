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
import FireItem from "./FireItem";
// import Nov from "./Nov";

//...
function App() {
  const ref = firebase.firestore().collection("polja");
  // enableIndexedDbPersistence(db).catch((err) => {
  //   if (err.code == "failed-precondition") {
  //     // ...
  //   } else if (err.code == "unimplemented") {
  //     // ...
  //   }
  // });

  return (
    <BrowserRouter>
      <div className="App">
        login
        <div>
          <Header />
        </div>
        <Route path="/" exact component={Header} />
        <Route path="/adresar" component={FireList} />
        <Route path="/kontakt" exact component={ContactEdit} />
        <Route path="/kontakt/detalji/:id" component={FireDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
