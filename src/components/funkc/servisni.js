import firebase from "firebase";
import "firebase/firestore";
// import { enableIndexedDbPersistence } from "firebase/firestore";

const ref = firebase.firestore().collection("polja");

// enableIndexedDbPersistence(ref).catch((err) => {
//   if (err.code == "failed-precondition") {
//   } else if (err.code == "unimplemented") {
//       }
// });

// dodaj async
async function addItem(newItem) {
  ref
    .doc(newItem.id)
    .set(newItem)
    .catch((err) => {
      console.error(err);
    });
}
//promijeni
// //
const getAll = () => {
  return ref;
};

const create = (data) => {
  return ref.add(data);
};

const update = (id, value) => {
  return ref.doc(id).update(value);
};

const remove = (id) => {
  return ref.doc(id).delete();
};

const Servis = {
  getAll,
  create,
  update,
  remove,
};

export default Servis;
