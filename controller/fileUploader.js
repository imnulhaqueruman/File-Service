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
    const uid = req.params.id
    const s3 = new aws.S3();
    const date = new Date();
    const rowImage = `${req.file.originalname}`;
    var params_rowImage = {
        ACL: 'public-read',
        Bucket:process.env.Bucket_Name,
        Body: fs.createReadStream(req.file.path),
        ContentType: req.file.mimetype,
        Key: `avatar/${rowImage} `
      };
      // console.log(params)
      await s3.upload(params_rowImage,(err,data) =>{
        if(err){
            console.log('Error occured while trying to upload to s3 bucket', err)
        }
        if (data) {
            fs.unlinkSync(req.file.path); // Empty temp folder
            const locationUrl = data.Location;
            // console.log(data)
            let image = new Images({avatar: locationUrl, uid:uid });
            image
              .save()
              .then(img => {
                res.json({ message: 'image saved successfully', img });
              })
              .catch(err => {
                console.log('Error occured while trying to save to DB');
              });
          }
      })
}