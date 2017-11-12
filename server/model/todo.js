var mongoose=require('mongoose');
var config=require('../config/db');
mongoose.Promise = global.Promise; 
var connect=mongoose.createConnection(config.mongo);
var todoSchema=new mongoose.Schema({
	author:String,
	content:String,
	done:Boolean,
});
var Todo=connect.model('todos',todoSchema);
module.exports={
	Todo:Todo
};