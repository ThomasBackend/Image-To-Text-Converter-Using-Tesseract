const tesseract = require("node-tesseract-ocr");

const renderHTML = async(req,res) => {
    try {

        return res.render('index',{data : ''});
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

const convertImageToText = async (req,res)=>{
    try {
        console.log(req.file.path)

        const config = {
            lang: "eng",
            oem: 1,
            psm: 3,
          }
          
         const extractText = await tesseract
            .recognize(req.file.path, config)
            .then((text) => {
              console.log("Result:", text)
              res.render('index',{data:text})
            })
            .catch((error) => {
              console.log(error.message)
            })

    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

module.exports = {renderHTML, convertImageToText}