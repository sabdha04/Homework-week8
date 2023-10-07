var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var things = require('./things.js');
var datas = require('./datas.js');

app.use(bodyParser.json());
app.use('/things', things);
//memanggil routers
app.use('/', datas);

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});