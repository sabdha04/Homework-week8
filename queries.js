//ini query untuk mengkoneksikan ke database postgresql
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dvrental',
    password: 'sabdha04',
    port: '5432',
})

//ini query untuk menampilkan data seluruh list film yang ada pada database
const getallFilm = (req,res)=>{
    const sqlQuery = "SELECT * FROM film";
    pool.query(sqlQuery,(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows);
    })
}
//ini query untuk menampilkan data seluruh list category yang ada pada database
const getallCategory = (req,res) => {
    const sqlQuery = "SELECT * FROM category ";
    pool.query(sqlQuery,(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows);
        
    })
}
//ini query untuk menampilkan data film tertentu berdasarkan id, disini aku panggil contohnya pada id ke 5!!
const getfilmById = (req,res) => {
    const sqlQuery = "SELECT * FROM film WHERE film_id = 5";
    pool.query(sqlQuery,(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows);
    })
}
//ini query untuk menampilkan data list film berdasarkan category
const getfilmByCategory = (req,res) => {
    const sqlQuery = "SELECT film. * FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = 5";
    pool.query(sqlQuery,(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows);
    })
}
module.exports = {
    pool,
    getallFilm,
    getallCategory,
    getfilmById,
    getfilmByCategory,
};