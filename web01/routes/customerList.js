var express = require('express');
var router = express.Router();
//----------------------------------------------------
// 透過require引用db.js的pool物件,
// 即使多個程式均引用, 在系統中只有一份pool物件.
//----------------------------------------------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    pool.query('select * from customer', function (error, results, fields) {
        if (error){
            res.render('customerList', {data:[]});
        }else{
            res.render('customerList', {data:results});
        }       
    });
});

module.exports = router;