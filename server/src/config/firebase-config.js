require("dotenv").config();

const admin = require("firebase-admin");
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("../../firebase.json");

initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();
const auth = getAuth();

module.exports = {
  db,
  auth,
};
