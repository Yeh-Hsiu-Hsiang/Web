var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//------------------
// 載入資料庫連結
//------------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    //取得使用者傳來的參數
    var cusNo=req.param("cusNo");
    var cusName=req.param("cusName");
    var contactor=req.param("contactor");
    var title=req.param("title");
    var address=req.param("address");
	
    //建立一個新資料物件
    var newData={
        cusNo:cusNo,
        cusName:cusName,
        contactor:contactor,
        title:title,
        address:address,
    }	
	
    pool.query('INSERT INTO customer SET ?', newData, function(err, rows, fields) {
        if (err){
            res.render('addFail', {});     //新增失敗
        }else{
            res.render('addSuccess', {});  //新增成功
        }
    });
});

module.exports = router;