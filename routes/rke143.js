const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json');

router.post('/', (req, res) => {
    const { nimi, kood } = req.body;

    if (nimi === 'rke' && kood === '143') {
        res.status(200).json(rke143Data);
    } else {
        res.status(400).json({ message: 'invalid credentials' });
    }
});

module.exports = router;
