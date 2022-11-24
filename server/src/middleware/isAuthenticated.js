const { auth } = require("../config/firebase-config");

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const idToken = authHeader.split(" ")[1];

    if (authHeader && idToken) {
      auth
        .verifyIdToken(idToken)
        .then((decodeToken) => {
          if (decodeToken) {
            res.locals = {
              ...res.locals,
              uid: decodeToken.uid,
              role: decodeToken.role,
              email: decodeToken.email,
            };
            // console.log(decodeToken);
            return next();
          }
        })
        .catch((error) => {
          console.log("auth error", error);
          return res.status(403).send({ message: "Unauthorized gaaaaa" });
        });
    } else {
      return res.status(403).send({ message: "Unauthorized gaaaaa" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Unauthorized gaaaaa" });
  }
};

module.exports = isAuthenticated;
