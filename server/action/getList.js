var express=require('express');
var todoModel=require('../dao/todoDao');
var router=express.Router();

//for url ../list/
router.get('/',function(req,res,next){
	res.send("it's get method for list");
});
router.post('/',function(req,res){
	todoModel.getList().then(function(list){
		res.send(list);
	}).catch(function(err){
		console.log(err);
	});
});

module.exports=router;
