const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json'); // Import nodejs.json file

router.post('/', (req, res) => {
    const { nimi, kood } = req.body; // Extract name and code from the request body

    // Check if the name and code match the conditions
    if (nimi === 'rke' && kood === '143') {
        // Respond with the content of nodejs.json
        res.status(200).json(rke143Data);
    } else {
        // Respond with invalid credentials message
        res.status(400).json({ message: 'invalid credentials' });
    }
});

module.exports = router;
