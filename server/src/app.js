const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const isAuthenticated = require("./middleware/isAuthenticated.js");
const isAuthorized = require("./middleware/isAuthorized");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Middlewares
app.use(isAuthenticated);
// app.use(isAuthorized({ hasRole: ["admin"] }));

// Routes
app.use("/auth", require("./routes/auth.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/suscription", require("./routes/suscription.routes"));

module.exports = app;
