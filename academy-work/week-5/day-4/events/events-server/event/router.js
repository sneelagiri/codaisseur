const express = require("express");
const { Router } = express;
const router = new Router();
const Event = require("./model");

router.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
});

router.get("/event", (req, res, next) => {
  Event.findAll()
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

router.get("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => {
      if (!event) {
        res.status(404).end();
      } else {
        res.json(event);
      }
    })
    .catch(next);
});

router.put("/event/:id", (request, response, next) =>
  Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
);

router.delete("/event/:id", (request, response, next) =>
  Event.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);
module.exports = router;
