const express = require('express') ;
const convertRouter = require('./routes/convert')
const app = express();

app.get('/test',convertRouter);

app.set('view engine',"ejs");

app.use('/',convertRouter);


const port = 8000;

app.listen(port, () => {
    console.log(`Image to text server started at ${port}`)
})