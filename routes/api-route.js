const app = require("express").Router();
const workout = require("/models/workout.js");

// POST a new workout
app.post("/api/workouts", ({body}, res) => {
    workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

//GET the most recent workout

//PUT in a new exercise

//GET daily workouts for chart info