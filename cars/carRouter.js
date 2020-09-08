const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("car-dealer")
    .then((cars) => {
      res.status(200).json({ data: cars });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error." });
    });
});

router.post("/", (req, res) => {
  const newCar = req.body;

  db("car-dealer")
    .insert(newCar)
    .returning("id")
    .then((ids) => {
      res.status(201).json(newCar);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error." });
    });
});

module.exports = router;
