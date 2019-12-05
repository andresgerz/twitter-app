// Database
const { Pool } = require('pg');


const config = {
    user: 'andresql',
    host: 'localhost',
    password: '15ZaD&TF64',
    database: 'twitter-app-db',
    port: '5432' 
};

const pool = new Pool(config);

const { findTweet } = require('./twitter');


//Controllers
const getTweet = async (req, res) => {
    
    const response = await pool.query('SELECT * FROM tweets');
    res.status(200).json(response.rows);       
}


const getTweetById = async (req, res) => {

    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM tweets WHERE id = $1', [id])
    res.json(response.rows);
}


const createTweet = async (req, res) => {
    
    const { tweet } = req.body;  
    const found = findTweet(tweet).then(function(result) {  
        
        res.json({
            "result": result
        })
    });
    const response = await pool.query('INSERT INTO tweets (tweet) VALUES ($1)', [tweet]);
}


module.exports = {
    getTweet,
    getTweetById,
    createTweet
}