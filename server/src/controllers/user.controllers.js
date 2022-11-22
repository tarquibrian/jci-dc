const { db, auth } = require("../config/firebase-config");

const getUsers = async (req, res) => {
  try {
    const query = db.collection("users").get();

    const docs = (await query).docs.map((doc) => ({
      ...doc.data(),
    }));
    // console.log(docs);
    res.send(docs);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const query = db.collection("users").doc(id);

    const snapshot = await query.get();
    // snapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
    res.send(snapshot.data());
  } catch (error) {
    console.log(error);
  }
};

const setUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const role = 'admin'
  const userData = {
    firstname,
    lastname,
    email,
    password,
    enabled: true,
    role
  };


  if (!firstname || !lastname || !password || password.lengh < 6 || !email) {
    res.status(400).send({ message: "campos vacios" });
  }

  const { uid } = await auth.createUser({
    firstname,
    lastname,
    email,
    password,
  });

  await auth.setCustomUserClaims(uid, { role });

  const query = await db
    .collection("users")
    .doc()
    .set({
      ...userData,
    });
  res.send({ uid });
};

const updateUser = async (req, res) => {
  const { id, data } = req.body;
  const query = await db
    .collection("users")
    .doc(id)
    .update({
      ...data,
    });
  // .then((data) => res.send(data))
  // .catch((error) => console.log(error));
  res.send(query);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const userData = await db.collection("users").doc(id).get();

  await db
    .collection("disabledUsers")
    .doc()
    .set({
      ...userData.data(),
    });

  await db.collection("users").doc(id).delete();

  console.log(userData.data);

  res.send("deleted user");
};

module.exports = {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
};
