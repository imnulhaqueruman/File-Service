const Images = require('../models/image')
const Thumbnail = require('../models/thumbnail')
const aws = require('aws-sdk')
const fs = require('fs')
const path = require("path");
const sharp = require('sharp');


exports.Uploader= async(res,req,next) =>{
    aws.config.setPromisesDependency();
    aws.config.update({
        accessKeyId:process.env.Access_key,
        secretAccessKey:process.env.Secret_key,
        endpoint:process.env.End_Point_Url,
        sslEnabled: false,
        forcePathStyle:true
       
    })
}