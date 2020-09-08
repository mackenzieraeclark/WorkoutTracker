const app = require("express").Router();
const workout = require("../models/workout.js");

// POST a new workout
app.post("/api/workouts", ({body}, res) => {
    workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//GET the most recent workout
app.get("/api/workouts", (req, res) => {
    workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//PUT in a new exercise
app.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(
      req.params.id,
      { $push: {exercises: req.body}},
      { new: true}
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//GET daily workouts for chart info
app.get("/api/workouts/range", (req, res) => {
    workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = app;