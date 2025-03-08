const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router');

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Database connected successfully..."));
app.listen(process.env.PORT, ()=>{console.log(`Server is running on port ${PORT}`)});

app.use(cors());
app.use(bodyParser.json());
app.use(router);

