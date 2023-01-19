const express = require('express')
const multer = require('multer');
const router = express.Router();
const fs = require('fs')
const path = require("path");
require('dotenv').config();
const {uploader} = require('../controllers/fileUploader')
const{getRowImage} = require('../controllers/getFile') 


router.post("/upload/:id", multer({ dest:`blogs`, limits: { fieldSize: 8 * 1024 * 1024 } }).single(
    'avatar'
    ), uploader)
router.get('/file/:id', getRowImage)
module.exports = router