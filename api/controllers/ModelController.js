/**
 * ModelController
 *
 * @description :: Server-side logic for managing models
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	exist: function(req, res, next) {
		var id = req.param("id")
		 Model.findOne(id)
			.exec(function(err, data) {
				if(err) res.json({ "exist": "error"})
				  else if (!data) res.json({ "exist": false})
					else res.json({ "exist": true})
			})
	},
	list : function (req, res) {
		//Model.find()
		//	.exec(function(err, data){
				res.locals.resources = req.session.resources
				res.locals.user = {user: req.session.user, name: req.session.username}
		//		res.locals.data = JSON.stringify(data)
				res.locals.data = []
				//res.locals.app = JSON.stringify(req.body)
				res.view("Model/list")
		//	})
	},
	create: function (req, res, next) {
		//var xmodel = req.body
		var xmodel = req.params.all();
		Model.create(xmodel, function (err, created){
			if (err) return next(err);
			var functionx = {app: created.app, model: created.id, name: 'List '+created.name, type:'list'}
			ModelFunction.create(functionx, function(err2, f_created) {
				if (err2) return next(err2);
				var functionList = {mfunction: f_created.id, new: 'e', display: 'e', edit: 'e', delete: 'e', columns: 'e', print: 'e', download: 'e', ga: 'e', dialog_width: '30em', card_width: '86em', btn_left: '80px'}
				FunctionList.create(functionList, function(err3, fl_created) {
					if (err3) return next(err3);
					return res.json(created);
				})
			})
		});
	},
	export : function(req, res) {
		Model.find()
		 .exec(function(err, models) {
			if (models.length > 0)
			{
				var Models_data = JSON.stringify(models)
				var fs = require('fs')
				fs.writeFile('./db/Models.txt', Models_data, 'utf8', function(err){
					if (err) {
						console.log('Error Exporting Models: ', err)
						res.write('Error Exporting Models: ', err,'\n')
					}
					else
					{
					  console.log('Exported '+models.length+' Models to file db/Models.txt')
					  res.write('Exported '+models.length+' Models to file db/Models.txt\n')
					}
				})
			}
		})
	},
	import: function(req, res) {
		Model.destroy({ id: { '>=': 0 }})
		 .exec(function(err){
			if (err) console.log('Error deleting Models: ',err)
			var fs = require('fs')
			fs.readFile('./db/Models.txt', function(err, data) {
				if (err)
				{
					console.log('Error Reading Models: ', err)
					res.write('Error Reading Models: ', err)
				}
				else
				{
					var data_obj = JSON.parse(data)
					for (var i=0; i < data_obj.length; i++) {
						Model.create(data_obj[i])
						.exec(function(err, created) {
							if (err) 
								console.log('Error Creating Model: ', err,'\n')
						 //else
						//	console.log('Created Model: ', created)
						})
					}
					console.log('Imported '+data_obj.length+' Models to table Model')
					res.write('Imported '+data_obj.length+' Models to table Model\n')
				}
			})
		 })
	}
};

