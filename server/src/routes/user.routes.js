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

router.get(
  // API
  "/",
  // Middleware
  [isAuthorized({ hasRole: ["admin", "user"] })],
  // Controller
  getUsers
);

router.get(
  // Api
  "/:id",
  // Middleware
  [isAuthorized({ hasRole: ["admin", "user"], allowSameUser: true })],
  // Controller
  getUser
);

router.post(
  // API
  "/",
  // Middleware
  [isAuthorized({ hasRole: ["admin"] })],
  // Controller
  setUser
);

router.put(
  // Api
  "/",
  // Middleware
  [isAuthorized({ hasrole: ["admin", "user"], allowSameUser: true })],
  // Controller
  updateUser
);

router.delete("/:id", [isAuthorized({ hasRole: ["admin"] })], deleteUser);

module.exports = router;
