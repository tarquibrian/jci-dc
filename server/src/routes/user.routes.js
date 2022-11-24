const { Router } = require("express");
const {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const isAuthenticated = require("../middleware/isAuthenticated");
const isAuthorized = require("../middleware/isAuthorized");

const router = Router();

router.get("/", [isAuthorized({ hasRole: ["admin", "user"] })], getUsers);

router.get(
  "/:id",
  [isAuthorized({ hasRole: ["admin", "user"], allowSameUser: true })],
  getUser
);

router.post("/", [isAuthorized({ hasRole: ["admin"] })], setUser);

router.put(
  "/",
  [isAuthorized({ hasrole: ["admin", "user"], allowSameUser: true })],
  updateUser
);

router.delete("/:id", [isAuthorized({ hasRole: ["admin"] })], deleteUser);

module.exports = router;
