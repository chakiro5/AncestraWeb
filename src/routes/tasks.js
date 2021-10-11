const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    res.json('Se cargaron datos desde el cliente');
});

module.exports = router;