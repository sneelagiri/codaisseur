const { Router } = require("express");
const router = new Router();
const teachers = ["Matias", "Jeroen", "Jeroen", "Rein", "Kelley", "David"];
router.get("/teacher", (request, response) => response.send(teachers));
module.exports = router;
