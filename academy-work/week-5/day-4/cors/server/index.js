const express = require("express");
const cors = require("cors");
const middleware = cors();
const app = express();
const port = 4000;
app.use(middleware);
app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log("Server running on port: ", port);
});
