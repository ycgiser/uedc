var getList=require('./action/getList');

module.exports=function(app){
	app.use('/list',getList);
};
