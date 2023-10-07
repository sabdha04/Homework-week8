var pool = require('../queries.js');
var fs = require('fs');

//ini query dari pdf
const seedQuery = fs.readFileSync('db/seeding.sql',{encoding:'utf-8'})
pool.query(seedQuery,function(error,response){
    console.log(error)
    console.log('Sedding Completed!!')
    pool.end()
})
