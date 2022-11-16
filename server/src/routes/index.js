const { Router } = require("express");
const { db } = require("../config/firebase-config");

const router = Router();

router.get("/users", async (req, res) => {
  const result = await db.collection("users").get();

  const docs = result.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(docs);

  res.send("JCI");
});

router.post("/new-user", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  console.log(firstname, lastname, email, password);

  res.send("new user created");
});

router.post('/new-suscription', async (req, res) => {

  const result = await db.collection('users').doc('xAyFZciemwTp1QZWQq3I')

  result.get().then((doc) => {
    if (!doc.exists) return;
    console.log("Document data:", doc.data());
    res.send("Document data:", doc.data())
    // Document data: { titulo: 'El gran Gatsby' }
  });

  res.send(result)
})

module.exports = router;
