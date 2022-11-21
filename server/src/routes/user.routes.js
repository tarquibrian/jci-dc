const { Router } = require("express");
const {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", setUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

module.exports = router;
