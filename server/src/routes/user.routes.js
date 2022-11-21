const { Router } = require("express");
const { getUsers, getUser } = require("../controllers/user.controllers");

const router = Router();

router.get("/get-users", getUsers);

router.get("/get-user/:id", getUser);

router.post("/set-user", (req, res) => {
  res.send("created user");
});

router.put("/update-user", (req, res) => {
  res.send("updated user");
});

router.delete("/delete-user", (req, res) => {
  res.send("deleted user");
});

module.exports = router;
