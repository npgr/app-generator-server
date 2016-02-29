/**
 * FunctionListController
 *
 * @description :: Server-side logic for managing Functionlists
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	get : function (req, res) {
		var model = req.body.id
		FunctionList.findOne({'model': model})
			.populate('model')
			.exec(function(err, data){
				res.json(data)
			})
	},
	generate: function(req, res) {
		model = req.body.model_id
		console.log('model: ',model)
		FunctionList.findOne({model: req.body.model_id})
			.exec(function(err, func) {
				res.json({'function List': func})
				require('crud5').get_model(function(jsondat) { 
					// global variable jsondata
					jsondata = jsondat
					console.log('generate Function list:\n', jsondata)
					//require('crud5').generate('crud6')
				})
			})
	},
	export : function(req, res) {
		FunctionList.find()
		 .exec(function(err, functionLists) {
			if (functionLists.length > 0)
			{
				var FunctionLists_data = JSON.stringify(functionLists)
				var fs = require('fs')
				fs.writeFile('./db/FunctionLists.txt', FunctionLists_data, 'utf8', function(err){
					if (err) {
						console.log('Error Exporting FunctionLists: ', err)
						res.write('Error Exporting FunctionLists: ', err)
					}
					else
					{
					  console.log('Exported '+functionLists.length+' FunctionLists to file db/FunctionLists.txt')
					  res.write('Exported '+functionLists.length+' FunctionLists to file db/FunctionLists.txt\n')
					}
				})
			}
		})
	},
	import: function(req, res) {
		FunctionList.destroy({ id: { '>=': 0 }})
		 .exec(function(err){
			if (err) console.log('Error deleting FunctionLists: ',err)
			var fs = require('fs')
			fs.readFile('./db/FunctionLists.txt', function(err, data) {
				if (err)
				{
					console.log('Error Reading FunctionLists: ', err)
					res.write('Error Reading FunctionLists: ', err,'\n')
				}
				else
				{
					var data_obj = JSON.parse(data)
					for (var i=0; i < data_obj.length; i++) {
						FunctionList.create(data_obj[i])
						.exec(function(err, created) {
							if (err) 
								console.log('Error Creating FunctionList: ', err)
						 //else
						//	console.log('Created FunctionList: ', created)
						})
					}
					console.log('Imported '+data_obj.length+' FunctionLists to table FunctionList')
					res.write('Imported '+data_obj.length+' FunctionLists to table FunctionList\n')
				}
			})
		 })
	}
};

