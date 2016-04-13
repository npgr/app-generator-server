/**
 * AttributeController
 *
 * @description :: Server-side logic for managing attributes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	exist: function(req, res, next) {
		/*var model = req.param("model")
		 Attribute.findOneByModel(model) 
			.exec(function(err, data) {
				if(err) res.json({ "exist": "error"})
				  else if (!data) res.json({ "exist": false})
					else res.json({ "exist": true})
			})*/
		res.json({ "exist": false})
	},
	list : function (req, res) {
		//Attribute.find()
		//	.exec(function(err, data){
		res.locals.resources = req.session.resources
		res.locals.user = {id: req.session.userid, user: req.session.user, name: req.session.username, 
		 email: req.session.email, language: req.session.languagePreference}
		//		res.locals.data = JSON.stringify(data)
		res.locals.data = []
		//res.locals.model = JSON.stringify(req.body)
		res.view("Attribute/list")
		//	})
	},
	export : function(req, res) {
		Attribute.find()
		 .exec(function(err, attributes) {
			if (attributes.length > 0)
			{
				var Attributes_data = JSON.stringify(attributes)
				var fs = require('fs')
				fs.writeFile('./db/Attributes.txt', Attributes_data, 'utf8', function(err){
					if (err) {
						console.log('Error Exporting Attributes: ', err)
						res.write('Error Exporting Attributes: ', err,'\n')
					}
					else
					{
					  console.log('Exported '+attributes.length+' Attributes to file db/Attributes.txt')
					  res.write('Exported '+attributes.length+' Attributes to file db/Attributes.txt\n')
					}
				})
			}
		})
	},
	import: function(req, res) {
		Attribute.destroy({ id: { '>=': 0 }})
		 .exec(function(err){
			if (err) console.log('Error deleting Attributes: ',err)
			var fs = require('fs')
			fs.readFile('./db/Attributes.txt', function(err, data) {
				if (err)
				{
					console.log('Error Reading Attributes: ', err)
					res.write('Error Reading Attributes: ', err,'\n')
				}
				else
				{
					var data_obj = JSON.parse(data)
					for (var i=0; i < data_obj.length; i++) {
						Attribute.create(data_obj[i])
						.exec(function(err, created) {
							if (err) 
								console.log('Error Creating Attribute: ', err)
						 //else
						//	console.log('Created Attribute: ', created)
						})
					}
					console.log('Imported '+data_obj.length+' Attributes to table Attribute')
					res.write('Imported '+data_obj.length+' Attributes to table Attribute\n')
				}
			})
		 })
	}
	
};

