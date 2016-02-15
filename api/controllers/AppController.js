/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	list : function (req, res) {
		res.locals.resources = req.session.resources
		res.locals.user = {user: req.session.user, name: req.session.username}
		res.locals.data = []
		res.view("app/list")
	},
	get: function (req, res) {
		//console.log('req.options.resource: ', req.options.resource)
		if (req.param('id'))
		{
			App.find({id: req.param('id')})
				.exec(function(err, apps) {
					res.json(apps[0])
				})
		}
		else
		{
		 if (req.options.resource.data == 'all') //Profile Resource
		  App.find()
			.exec(function(err, apps) {
			  res.json(apps)
			})
		 else // asume data == 'select'
		  UserResource.find()
			.populate('app')
			.exec(function(err, uresource) {
				var i=0
				var ures = []
				for (i=0; i<uresource.length; i++)
					ures.push(uresource[i].app)
				res.json(ures)
			})
		}
	},
	deleteApp : function (req, res) {
		var app_id = req.param('app')
		App.destroy({id: app_id})
		  .exec(function(err, apps_deleted) {
		    console.log('deleted Apps: ', apps_deleted)
			Model.destroy({app: apps_deleted[0].id})
			  .exec(function(err, models) {
				console.log('model deleted: ', models )
				for (j=0; j< models.length; j++)
				  Attribute.destroy({model: models[j].id})
					.exec(function(err, attrs) {
						console.log('Attrs deleted: ', attrs)
				  })  
			})
			ModelFunction.destroy({app: apps_deleted[0].id})
			  .exec(function(err, mfuncs) {
				console.log('mfunction deleted: ', mfuncs)
				for (i=0; i < mfuncs.length; i++)
				{
					FunctionList.destroy({mfunction: mfuncs[i].id})
					  .exec(function(err, f_list) {
						console.log('Function List deleted: ', f_list)
					})
					
				}
			})
			return res.json({msg: 'App deleted'})
		})	
	}
};

