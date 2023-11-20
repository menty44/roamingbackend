require('dotenv').config();
require('express-group-routes');

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;


const config = process.env;

const cors = require('cors');


const search_routes = require('./routes/search.route');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})


database.once('connected', () => {
    console.log(`Database Connected`);
})

const app = express();

app.use(cors())

app.use(express.json());

app.group("/api/v1", (router) => {
    router.use('/search', search_routes);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT} 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀`);
})