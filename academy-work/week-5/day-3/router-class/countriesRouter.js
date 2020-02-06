const { Router } = require("express");
const router = new Router();
router.get("/countries", (request, response) =>
  response.send(["The Netherlands", "Belgium", "Luxembourg"])
);
module.exports = router;
