const isAuthorized = (opts) => {
  return (req, res, next) => {
    try {
      const { uid, email, role } = res.locals;
      const id = req.params;

      if (email === "tarquibrian@gmail.com") {
        console.log("admin");
        return next();
      }

      if (opts.allowSameUser && id && uid === id) {
        return next();
      }

      if (!role) {
        return send.status(403).send({ message: "Unauthorized" });
      }

      if (opts.hasRole.includes(role)) {
        return next();
      }

      return res.status(403).send({ message: "Unauthorized" });
    } catch (error) {
      console.log("ERROR", error);
      return res.send({ message: "INTERNAL ERROR" });
    }
    // return next();
  };
};

module.exports = isAuthorized;
