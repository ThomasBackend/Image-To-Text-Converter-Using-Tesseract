const express = require('express');
const multer = require('multer');
const uuid = require('uuid');
const path = require('path')
const {renderHTML, convertImageToText} = require('../controllers/convertController');


const router = express.Router();


router.use(express.static(path.join(__dirname+'/uploads')));

const storage = multer.diskStorage({
destination: function (req,file, cb){
    cb(null,'uploads')
},
filename : function (req, file, cb){
    const uniqueIdentifier = uuid.v4();

    const modifiedFileName = `${uniqueIdentifier}${file.originalname}`;

    cb(null, modifiedFileName)
}
});

const upload = multer({storage : storage});



router.get('/',renderHTML);
router.post('/extract-text', upload.single('file'), convertImageToText );



module.exports = router;