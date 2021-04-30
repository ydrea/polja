import firebase from "firebase";
import "firebase/firestore";
// import { enableIndexedDbPersistence } from "firebase/firestore";

const ref = firebase.firestore().collection("polja");

// enableIndexedDbPersistence(ref).catch((err) => {
//   if (err.code == "failed-precondition") {
//   } else if (err.code == "unimplemented") {
//       }
// });

class Servis {
  //promijeni
  // //
  // const updateItem = () => {
  //   firebase
  //     .firestore()
  //     .collection("polja")
  //     .where("id", "==", match.params.id)
  //     // .doc(updatedItem.id)
  //     // .update(updatedItem)
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // dodaj
  async addItem(newItem) {
    ref
      .doc(newItem.id)
      .set(newItem)
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new Servis();
