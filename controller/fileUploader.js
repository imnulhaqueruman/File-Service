const Images = require('../models/image')
const Thumbnail = require('../models/thumbnail')
const aws = require('aws-sdk')
const fs = require('fs')
const path = require("path");
const sharp = require('sharp');