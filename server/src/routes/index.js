const { Router } = require("express");
const { db } = require("../config/firebase-config");
const path = require("path");
const { QuerySnapshot } = require("firebase-admin/firestore");
const router = Router();

router.get("/users", async (req, res) => {
  try {
    const result = await db.collection("users").get();

    const docs = result.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(docs);

    res.send(docs);
  } catch (error) {
    console.log(error);
  }
});

router.post("/new-user", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  console.log(firstname, lastname, email, password);

  res.send("new user created");
});

router.post("/new-suscription", async (req, res) => {

  let id = {}

  const result = await db
    .collection("suscriptions")
    .where("id_user", "==", "G52hPFALu5dygtTpSmJz");

  result.get().then((querySnapshot) => {
    querySnapshot.forEach((documentSnapshot) => {
      let data = documentSnapshot.data()
      return res.send((data));
    });
  });

  // const doc = result.get().then((querySnapshot) => {
  //   // console.log(querySnapshot);
  //   querySnapshot.forEach((documentSnapshot) => {
  //     // console.log(`Found document at ${documentSnapshot.ref.path}`);
  //     item: documentSnapshot.data();
  //   });
  // });

  // res.send(id);
});

module.exports = router;
