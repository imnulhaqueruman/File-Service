const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs')
const cors = require('cors')
const mongoose = require('mongoose');
require("dotenv").config();
const uuid = require("uuid").v4;
const path = require("path");
const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
const port = 4000;

// db connect 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `${process.env.URI}`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log(`DB CONNECTION ERR${err}`))

// middleWares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(Errorhandler);


app.listen(port, '0.0.0.0', () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})
