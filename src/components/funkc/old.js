// const reFav = firebase
//   .firestore()
//   .collection("polja")
//   .where("published", "==", true);
// function getFavs() {
//   // setLoading(true);
//   ref.get().then((querySnapshot) => {
//     const favorites = [];
//     querySnapshot.forEach((doc) => {
//       setFavorites(favorite);
//     });
//   });
// }

// const addToFavorites = () => {
//   console.log("fav");
//   setFavorite(favorite);
// };

// useEffect(() => {
//   getFavs();
// }, [favorite]);

// const deleteItem = () => {
//   firebase
//     .firestore()
//     .collection("polja")
//     .where("id", "==", match.params.id)
//     .doc(item.id)
//     .delete()
//     .catch((err) => {
//       console.error(err);
//     });
// };

// docRef.onSnapshot((doc) => {
//   if (doc.exists) {
//     console.log("Document data:", doc.data());
//     setItem(doc.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// });
// // <p> Kontakt: {item.Kontakt}</p>
// // <div>
//   {/* <button onClick={deleteItem}>Izbri si</button> */}
//   {/* <button onClick={updateItem}>Azuriraj</button> */}
// {/* </div> */}

// const aref = firebase
//   .firestore()
//   .collection("polja")
//   .where("id", "==", "match.params.id")
// .get();

// function getIt() {
//   const item = [];
//   setLoading(true);
//   aref.get().then((item) => {
//     const item = i.docs.map((doc) => doc.data());
//     setItem(item);
//     console.log(item);
//     setLoading(false);
//   });
// }

// function getIt() {
//   console.log(aref);
// }
//
// firebase.firestore().collection("polja").doc(documentId).get().then((snapshot) => {
//   console.log(snapshot.data())
// }).catch((e) => console.log(e))
// function getIt() {
//   aref.get().then.map((i) => i.data);
//   console.log(i.data);
// }
// //
// function getIt() {
//   setLoading(true);
//   aref.onSnapshot((querySnapshot) => {
//     const item = [];
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//     setItem(item);
//     console.log(item);
//     setLoading(false);
//   });
// }

// .doc(doc.id)
// .get()
// .then((doc) => {
//   setItem(doc.data());
// });
