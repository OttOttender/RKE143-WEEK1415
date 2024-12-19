const express = require('express');
const app = express();
const rke143Router = require('./routes/rke143');

app.use(express.json());

app.use('/rke143', rke143Router);

app.use((req, res) => {
    res.status(404).send({ message: 'Endpoint not found' });
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
});
