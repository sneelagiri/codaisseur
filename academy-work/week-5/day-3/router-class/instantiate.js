const express = require("express");
const { Router } = express;
const router = new Router();
router.get("/", (request, response) => response.send("test"));
const app = express();
app.use(router);
const port = 4000;
app.listen(port);
