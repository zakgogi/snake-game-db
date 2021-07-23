const express = require('express');
const cors = require('cors');


const server = express();
server.use(cors());
server.use(express.json());

const scoresRoute = require("./controllers/highscoreController");

server.use('/scores', scoresRoute);

server.get('/', (req, res) => res.send("Hello I'm working!"));



module.exports = server;