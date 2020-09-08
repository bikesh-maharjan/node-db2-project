const express = require("express");

const db = require("./knexconfig");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Is it working?");
});

server.get("/cars", (req, res) => {
  db("cars")
    .then((cars) => {
      if (cars.length) {
        res.status(200).json({ data: cars }).end();
      } else {
        res
          .status(400)
          .json({ message: "The server is not running", data: cars })
          .end();
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "there is something wrong with the server" })
        .end();
    });
});
