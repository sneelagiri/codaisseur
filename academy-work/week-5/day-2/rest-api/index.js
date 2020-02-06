const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:secret@localhost:5432/postgres"
);
const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

const Task = sequelize.define("task", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

sequelize
  .sync()
  .then(() => console.log("Tables created successfully"))
  .catch(err => {
    console.error("Unable to create tables, shutting down...", err);
    process.exit(1);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/echo", (req, res) => {
  res.json(req.body);
});
// app.get("/users", (req, res) => res.json({ data: users }));
app.get("/users/:userId", (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then(user => {
      if (!user) {
        res.status(404).end();
      } else {
        res.json(user);
      }
    })
    .catch(next);
});
app.post("/users", (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
});

app.put("/users/:userId", (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then(user => {
      if (user) {
        return user.update(req.body).then(user => {
          res.json(user);
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      next();
    });
});

app.get("/users/:userId/tasks", (req, res, next) => {
  Task.findAll({
    where: {
      userId: req.params.userId
    }
  }).then(task => {
    if (task.length === 0) {
      return res.status(404).end();
    } else {
      return res.json(task);
    }
  });
});

app.get("/users/:userId/tasks/:taskId", (req, res, next) => {
  Task.findOne({
    where: {
      id: req.params.taskId,
      userId: req.params.userId
    }
  })
    .then(task => {
      if (task) {
        return res.json(task);
      }
      return res.status(404).end();
    })
    .catch(next);
});

app.post("/users/:userId/tasks", (req, res, next) => {
  User.findByPk(req.params.userId).then(user => {
    if (!user) {
      res.status(404).end();
    } else {
      Task.create({ ...req.body, userId: req.params.userId })
        .then(task => {
          if (task) {
            return res.json(task);
          }
          return res.status(404).end();
        })
        .catch(next);
    }
  });
});

app.put("/users/:userId/tasks/:taskId", (req, res, next) => {
  Task.findOne({
    where: {
      id: req.params.taskId,
      userId: req.params.userId
    }
  })
    .then(task => {
      if (task) {
        return task.update(req.body).then(task => {
          res.json(task);
        });
      } else {
        return res.status(404).end();
      }
    })
    .catch(next);
});

app.delete("/users/:userId/tasks/:taskId", (req, res, next) => {
  Task.findOne({
    where: {
      id: req.params.taskId,
      userId: req.params.userId
    }
  }).then(task => {
    if (!task) {
      return res.status(404).end();
    } else {
      return task.destroy(req.body).then(() => res.json("Task Deleted"));
    }
  });
});

app.delete("/users/:userId/tasks", (req, res, next) => {
  Task.destroy({
    where: {
      userId: req.params.userId
    }
  })
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});

// My way to delete all tasks
/* app.delete("/users/:userId/tasks", (req, res, next) => {
  Task.findAll({
    where: {
      userId: req.params.userId
    }
  }).then(tasks => {
    if (tasks.length === 0) {
      return res.status(404).end();
    } else {
      return tasks
        .map(task2 => {
          return task2.destroy(req.body);
        })
        .then(tasks => {
          res.json("Tasks Deleted");
        });
      // return tasks.destroy().then(() => res.json("Tasks Deleted"));
    }
  });
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
