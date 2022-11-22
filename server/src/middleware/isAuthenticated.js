const { auth } = require("../config/firebase-config");

let authorized = true;

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization

  const decodeValue = auth.verifyIdToken(idToken);
  if(authHeader){
    // res.status(403).send("unauthorized")
  }

  if (decodeValue) {
    next();
  } else {
    res.status(403).send("unauthorized");
  }
};

module.exports = isAuthenticated;
