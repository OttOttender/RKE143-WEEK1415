const express = require('express');
const router = express.Router();

// Importing nodejs.json data
const rke143Data = require('../data/nodejs.json'); // Adjust path as needed

// POST endpoint for `/rke143`
router.post('/', (req, res) => {
    const { name, code } = req.body; // Parsing `name` and `code` from request body

    // Check credentials
    if (name === 'rke' && code === '143') {
        res.status(200).json(rke143Data); // Respond with nodejs.json data
    } else {
        res.status(400).json({ message: 'Invalid credentials' }); // Invalid credentials response
    }
});

module.exports = router;
