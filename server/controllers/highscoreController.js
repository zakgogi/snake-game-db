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
})

module.exports = router;