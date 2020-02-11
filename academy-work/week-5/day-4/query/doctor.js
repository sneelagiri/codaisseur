const express = require("express");
const app = express();
const port = 4000;

app.get("/doctor", (req, res) => {
  const name = req.query.name || "Who";
  const doctor = `Dr. ${name}`;
  res.json(doctor);
});

app.get("/appointment", (req, res) => {
  const doctor = req.query.doctor || "Eggman";
  const patient = req.query.patient || "zero";
  const description = `Dr. ${doctor} and patient ${patient}`;
  res.json(description);
});

app.listen(port, () => {
  console.log("Server running on port: ", port);
});
