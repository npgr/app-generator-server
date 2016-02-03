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
		  /*.exec(function(err, app_deleted) {
			Model.destroy({app: app_deleted.id})
			  .exec(function(err, models) {
				console.log('model deleted: ', models )
				for (j=0; j< models.length; j++)
				  Attribute.destroy({model: models[j]})
					.exec(function(err, attrs) {
						console.log('Attrs deleted: ', attrs)
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
		})*/
	}
};

