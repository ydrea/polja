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
