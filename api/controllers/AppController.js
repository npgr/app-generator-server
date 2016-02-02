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
	deleteApp : function (req, res) {
		var app_id = req.param('app')
		App.detroy({id: app_id})
		  .exec(function(err, app_deleted) {
			Model.destroy({app: app_deleted.id})
			  .exec(function(err, models) {
				console.log('model deleted: ', models )
				for (j=0; j< models.length; j++)
				  Attribute.destroy({model: models[j]})
					.exec(function(err, attrs) {
					
					})  
			})
			ModelFunction.destroy({app: app_deleted.id})
			  .exec(function(err, mfuncs) {
				console.log('mfunction deleted: ', mfuncs)
				for (i=0; i < mfuncs.length; i++)
				{
					FunctionList.destroy({mfunction: mfuncs[i]})
					  .exec(function(err, f_list) {
						console.log('Function List deleted: ', f_list)
					})
					
				}
			})	
		})
		/*Model.destroy({app: app})
		  exec(function(err, models) { 
			for (i=0; i < models.length; i++)
			{
				ModelFunction.find({model: models[i].id})
				  exec(function(err, mfuncs) {
					for (j=0; j < mfuncs.length; j++)
						ModelFunction.delete({id: mfuncs[i].id})
				})
				FunctionList.find({model: models[i].id})
				  exec(function(err, funclist) {
					for (j=0; j < funclist.length; j++)
						FunctionList.delete({id: })
				})
				Model.delete({id: models[i].id})
			}
		})*/
	}
};

