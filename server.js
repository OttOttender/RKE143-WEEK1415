const express = require('express');
const bodyParser = require('body-parser');
const pumpkinRouter = require('./routes/pumpkin.js');
const rke143Router = require('./routes/rke143');

const app = express();

// Import JSON data
const pumpkinData = require('./data/pumpkin.json');
const rke143Data = require('./data/nodejs.json'); // Import nodejs.json (optional)

// Middleware for parsing JSON in request bodies
app.use(bodyParser.json());

// Root route: Respond with a random pumpkin drink recipe
app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length); 
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({ randomDrinkRecipe });
});

// Mount the pumpkin router at /pumpkin
app.use('/pumpkin', pumpkinRouter);

// Mount the rke143 router at /rke143
app.use('/rke143', rke143Router);

// Start the server on a dynamic port (for Render or local)
const PORT = process.env.PORT || 3000; // Use Render's provided port or default to 3000 locally
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
