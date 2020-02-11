const express = require("express");
const app = express();
const port = 4000;
const db = require("./db");
const Event = require("./event/model");
const cors = require("cors");
const corsMiddleware = cors();
const eventRouter = require("./event/router");

app.use(corsMiddleware);
app.use(express.json());
app.use(eventRouter);
app.listen(port, () => {
  console.log("Listening on port: ", port);
});
