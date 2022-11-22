const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(require("./routes/index"));
app.use("/user", require("./routes/user.routes"));
app.use("/suscription", require("./routes/suscription.routes"));

module.exports = app;
