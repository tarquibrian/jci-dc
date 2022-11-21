const { db, auth } = require("../config/firebase-config");

const getUsers = async (req, res) => {
  try {
    const query = db.collection("users").get();

    const docs = (await query).docs.map((doc) => ({
      ...doc.data(),
    }));

    console.log(docs);
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
  res.send("seted user");
};

const updateUser = async (req, res) => {
  res.send("updated user");
};

const deleteUser = async (req, res) => {
  res.send("deleted user");
};

module.exports = {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
};
