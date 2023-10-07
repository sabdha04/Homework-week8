var express = require('express')
var router = express.Router();

router.get('/:name',(req, res)=>{
    console.log({hasil:req.query.alamat})
    res.send("hello world sabdha!!!");
});

router.post('/',(req, res)=>{
    console.log({hasil:req.body})
    res.send("hello world sabdha post!!!");
});

router.put('/put',(req, res)=>{
    console.log({hasil:req.body})
    res.send("hello world sabdha put!!!");
});

module.exports = router;