const express = require("express");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");
const app = express();
app.use(studentRouter);
app.use(teacherRouter);
app.listen(4000);
