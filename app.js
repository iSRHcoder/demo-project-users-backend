const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const createUserRouter = require("./routes/create_users");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", createUserRouter);
const port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(`Server is running on- http//localhost:${port}`);
});
