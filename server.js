const express = require('express');
const bodyParser = require('body-parser');
const pumpkinRouter = require('./routes/pumpkin.js');
const rke143Router = require('./routes/rke143'); 

const app = express();

const pumpkinData = require('./data/pumpkin.json'); 

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length); 
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({ randomDrinkRecipe });
});

app.use('/pumpkin', pumpkinRouter);

app.use('/rke143', rke143Router);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
