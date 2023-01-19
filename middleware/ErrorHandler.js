const multer = require('multer')
const Errorhandler = (err, req, res, next) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        res.status(500).send("There was an upload error!");
      } else {
        res.status(500).send(err.message);
      }
    } else {
      res.send("success");
    }
  };

module.exports ={
    Errorhandler
}