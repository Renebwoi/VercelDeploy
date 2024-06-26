const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');


require('dotenv').config();
const mongoString = process.env.DATABASE_URL


mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express();

// app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes)

app.listen(3000, () =>{
    console.log(`Server started at ${3000}`)
})

