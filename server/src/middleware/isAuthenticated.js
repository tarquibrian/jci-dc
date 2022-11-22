const { auth } = require("../config/firebase-config");

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const idToken = authHeader.split(" ")[1];

    if (authHeader && idToken) {
      auth
        .verifyIdToken(idToken)
        .then((decodeToken) => {
          if (decodeToken) return next();
        })
        .catch((error) => {
          return res.status(403).send({ message: "Unauthorized", error });
        });
    } else {
      return res.status(403).send({ message: "Unauthorized" });
    }
  } catch (error) {
    return res.send({ message: "Internal Error", error });
  }
};

module.exports = isAuthenticated;
