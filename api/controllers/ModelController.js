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
	}
};

