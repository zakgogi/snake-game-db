const express = require('express');
const HighScore = require('../models/highscores');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const highscores = await HighScore.all;
        res.json({highscores});
    } catch (err) {
        res.status(500).json({err});
    }
});

router.post('/', async (req, res) => {
    try {
        const post = await HighScore.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
});

module.exports = router;