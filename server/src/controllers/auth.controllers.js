const { auth } = require("../config/firebase-config");

const userLogin = async (req, res) => {
  const idToken = req.body.idtoken;

  const expiresIn = 600000;
  auth.createSessionCookie(idToken, { expiresIn }).then(
    (sessionCookie) => {
      // Set cookie policy for session cookie.
      const options = { maxAge: expiresIn, httpOnly: true, secure: true };
      res.cookie("session", sessionCookie, options);
      res.end(JSON.stringify({ status: "success" }));
    },
    (error) => {
      res.status(401).send("UNAUTHORIZED REQUEST!");
    }
  );

  // res.send()
};

module.exports = {
  userLogin,
};
