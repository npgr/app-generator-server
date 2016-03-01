/**
 * UserResourceController
 *
 * @description :: Server-side logic for managing Userresources
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	list : function (req, res) {
		//UserResource.find()
		//	.exec(function(err, data){
				res.locals.resources = req.session.resources
				res.locals.user = {user: req.session.user, name: req.session.username}
		//		res.locals.data = JSON.stringify(data)
				res.locals.data = []
				res.view("UserResource/list")
		//	})
	},
	export : function(req, res) {
		UserResource.find()
		 .exec(function(err, userResources) {
			if (userResources.length > 0)
			{
				var UserResources_data = JSON.stringify(userResources)
				var fs = require('fs')
				fs.writeFile('./db/UserResources.txt', UserResources_data, 'utf8', function(err){
					if (err) {
						console.log('Error Exporting UserResources: ', err)
						res.write('Error Exporting UserResources: ', err,'\n')
					}
					else
					{
					  console.log('Exported '+userResources.length+' UserResources to file db/UserResources.txt')
					  res.write('Exported '+userResources.length+' UserResources to file db/UserResources.txt\n')
					}
				})
			}
		})
	},
	import: function(req, res) {
		UserResource.destroy({ id: { '>=': 0 }})
		 .exec(function(err){
			if (err) console.log('Error deleting UserResources: ',err)
			var fs = require('fs')
			fs.readFile('./db/UserResources.txt', function(err, data) {
				if (err)
				{
					console.log('Error Reading UserResources: ', err)
					res.write('Error Reading UserResources: ', err,'\n')
				}
				else
				{
					var data_obj = JSON.parse(data)
					for (var i=0; i < data_obj.length; i++) {
						UserResource.create(data_obj[i])
						.exec(function(err, created) {
							if (err) 
								console.log('Error Creating UserResource: ', err)
						 //else
						//	console.log('Created Resource: ', created)
						})
					}
					console.log('Imported '+data_obj.length+' UserResources to table UserResource')
					res.write('Imported '+data_obj.length+' UserResources to table UserResource\n')
				}
			})
		 })
	}
};

