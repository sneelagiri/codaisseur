const { Router } = require("express");
const router = new Router();
router.get("/languages", (request, response) =>
  response.send(["Dutch", "French"])
);
module.exports = router;
