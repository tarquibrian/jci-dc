const { Router } = require("express");
const { db, auth } = require("../config/firebase-config");

const router = Router();

router.get("/get-suscriptions", (req, res) => {
  res.send("susctiptions");
});

router.get("/get-suscription", (req, res) => {
  res.send("susctiption");
});

router.post("/set-susctiption", (req, res) => {
  res.send("created susctiption");
});

router.put("/update-suscription", (req, res) => {
  res.send("updated susctiption");
});

router.delete("/delete-suscription", (req, res) => {
  res.send("deleted suscription");
});

module.exports = router;
