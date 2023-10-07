var express = require('express');
var router = express.Router();
var queries = require('./queries')

//ini route untuk menampilkan list semua film 
router.get('/',(req, res)=>{
    queries.getallFilm(req, res)
})
//ini route untuk menampilakan list semua category 
router.get('/category',(req, res)=>{
    queries.getallCategory(req, res)
})
//ini route untuk menampilkan film berdasarkan id yang diinginkan
router.get('/filmById',(req, res)=>{
    queries.getfilmById(req, res)
})
//ini route untuk menampilkan film berdasarkan category
router.get('/filmByCategory',(req, res)=>{
    queries.getfilmByCategory(req, res)
})

module.exports = router;