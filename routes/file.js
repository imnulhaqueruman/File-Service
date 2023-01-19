const express = require('express')
const multer = require('multer');
const router = express.Router();
const fs = require('fs')
const path = require("path");
require('dotenv').config();



router.post("/upload/:id", multer({ dest:`blogs`, limits: { fieldSize: 8 * 1024 * 1024 } }).single(
    'avatar'
    ), uploader)
module.exports = router