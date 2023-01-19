const mongoose = require('mongoose')
const {ObjectID} = mongoose.Schema;

const ImageSchema = new mongoose.Schema({
    avatar:{
        type:String,
    },
    uid:{
        type:String
    }
})
module.exports = mongoose.model('Images', ImageSchema)