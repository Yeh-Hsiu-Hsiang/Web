var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//----------------------
// 引用db.js
//----------------------
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    //------------------------------------------   
    // 將供應商及產品型態資料一起送給輸入表單
    //------------------------------------------
    res.render('customerAddForm', {});
       
});

module.exports = router;