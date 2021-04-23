import firebase from "firebase";
const ref = firebase.firestore().collection("polja");

class Servis {
  //listaj

  // dodaj
  async addItem(newItem) {
    ref
      .doc(newItem.id)
      .set(newItem)
      .catch((err) => {
        console.error(err);
      });
  }

  //ubij
  deleteItem(item) {
    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // promjeni
  editItem(updatedItem) {
    ref
      .doc(updatedItem.id)
      .update(updatedItem)
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new Servis();
