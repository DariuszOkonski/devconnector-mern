const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();


app.get('/', (req, res) => {
    console.log('I am working...');
    res.send('API Running...');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
})