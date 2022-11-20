const { Router } = require("express");
const { db, auth } = require("../config/firebase-config");
const path = require("path");
const { QuerySnapshot } = require("firebase-admin/firestore");
const router = Router();

router.get("/users", async (req, res) => {
  try {
    const result = await db
      .collection("users")
      .doc("xAyFZciemwTp1QZWQq3I")
      .collection("suscription")
      .get();

    const docs = result.docs.map((doc) => ({
      // id: doc.id,
      ...doc.data(),
    }));

    // console.log(docs);

    // res.send(docs);

    // result.forEach((doc) => {
    //   console.log(doc.id, '>', doc.data())
    // });
    res.send(docs);
  } catch (error) {
    console.log(error);
  }
});

router.post("/all", async (req, res) => {
  const result = await await auth.listUsers();

  res.send(result);
});

router.post("/new-user", async (req, res) => {
  const { email, password } = req.body;

  const result = await auth.createUser({
    email: email,
    passworda: password,
    emailVerified: false,
    disabled: false
  });

  res.send(result);
});

router.post("/new-suscription", async (req, res) => {
  const { iduser } = req.body;

  const months = {
    enero: false,
    febrero: false,
    marzo: false,
    abril: false,
    mayo: false,
    junio: false,
    julio: false,
    agosto: false,
    septiembre: false,
    octubre: false,
    noviembre: false,
    diciembre: false,
  };

  const result = await db
    .collection("users")
    .doc(iduser)
    .collection("suscription")
    .doc()
    .set({
      ...months,
    });

  res.send(result);
});

router.put("/update-suscription", async (req, res) => {
  const { iduser, months } = req.body;

  await db
    .collection("users")
    .doc(iduser)
    .collection("suscription")
    .doc("vrnK4My9ZR6Qa1Wx85R4")
    .update({
      ...months,
    });

  res.send({ iduser, months });
});

module.exports = router;
