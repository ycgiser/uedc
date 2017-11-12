var Todo=require('../model/todo').Todo;
module.exports={
	save:function(todo){
		var todo=new Todo(todo);
		todo.save();
		return todo;
	},
	getList:function(param){
		return Todo.find({author:'yc'}).select('content done').exec();
	},
	edit:function(id,data){
		return Todo.update({_id:id},{$set:data}).exec();
	},
	remove:function(ids){
		var idArr=ids.split(",");
		return Todo.remove({_id:{"$in":idArr}}).exec();
	}
}