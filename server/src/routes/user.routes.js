const { Router } = require("express");
const {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = Router();

router.get("/", [isAuthenticated], getUsers);

router.get("/:id", getUser);

router.post("/", setUser);

router.put("/", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
