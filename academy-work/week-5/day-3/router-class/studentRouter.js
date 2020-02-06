const { Router } = require("express");
const router = new Router();
const students = ["Rick", "Robin", "Shashank"];
router.get("/student", (request, response) => response.send(students));
module.exports = router;
