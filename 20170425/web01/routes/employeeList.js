var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//----------------
// 引用db.js
//----------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {

    pool.query('select * from employee', function(err, results) {
        if (err)throw err;

        if(results.length==0){
            res.render('dataNotFound', {});
        }else{
            res.render('employeeList', {data:results});
        }  
    }); 
});

module.exports = router;