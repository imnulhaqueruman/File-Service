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
