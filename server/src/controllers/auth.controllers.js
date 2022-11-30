const { auth } = require("../config/firebase-config");

const userLogin = async (req, res) => {
  const idToken = req.body.idtoken;

  const expiresIn = 600000;

  auth.createSessionCookie(idToken, { expiresIn }).then(
    (sessionCookie) => {
      const options = { maxAge: expiresIn, httpOnly: true, secure: true };
      res.cookie("session", sessionCookie, options);
      res.end(JSON.stringify({ status: "success" }));
    },
    (error) => {
      res.status(401).send({ message: "UNAUTHORIZED REQUEST!", error });
    }
  );
};

const userLogOut = async (req, res) => {
  res.send("log out");
};


module.exports = {
  userLogin,
};
