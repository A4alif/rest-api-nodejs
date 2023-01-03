require('dotenv').config();
const express = require('express')
const app = express();
const connectDB = require('./db/connect')
const port = 5000;
const productsRoute = require('./routes/products')

app.get('/', (req, res) => {
    res.send("Hi Api is running successfully \n To use this api go to /api/products ");
})
// conncect db
connectDB();

// set our router

app.use('/api/products', productsRoute)


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})