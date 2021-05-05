import firebase from "firebase";
import "firebase/firestore";
// import { enableIndexedDbPersistence } from "firebase/firestore";

const db = firebase.firestore().collection("polja");

// enableIndexedDbPersistence(ref).catch((err) => {
//   if (err.code == "failed-precondition") {
//   } else if (err.code == "unimplemented") {
//       }
// });

// dodaj async
async function addItem(newItem) {
  db.doc(newItem.id)
    .set(newItem)
    .catch((err) => {
      console.error(err);
    });
}
//promijeni
// //
// const getAll = () => {
//   return db;
// };

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const Servis = {
  // getAll,
  create,
  update,
  remove,
};

export default Servis;
