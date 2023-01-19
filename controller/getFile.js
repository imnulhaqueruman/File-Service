const Images = require('../models/image')


exports.getRowImage = async(req,res) =>{
    const images = await Images.findOne({uid:req.params.id}).exec()
    res.send(images)
}