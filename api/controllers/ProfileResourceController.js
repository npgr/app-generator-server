/**
 * ProfileResourceController
 *
 * @description :: Server-side logic for managing profileresources
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	/*select: function (req, res) {
		res.view("ProfileResource/select")
	},*/
	list : function (req, res) {
	//	ProfileResource.find()
	//		.exec(function(err, data){
				res.locals.resources = req.session.resources
				res.locals.user = {user: req.session.user, name: req.session.username}
	//			res.locals.data = JSON.stringify(data)
				res.locals.data = []
				res.view("ProfileResource/list")
	//		})
	},
	getDataResources : function (req, res) {
		var profile = req.param('profile')
		
		ProfileResource.find({profile: profile})
		  .populate('resource')
		  .exec(function (err, resources) {
			var filtered_resources = []
			for (i=0; i < resources.length; i++)
				if (resources[i].resource.type == 'data')
					filtered_resources.push(resources[i].resource)
			return res.json(filtered_resources)
		  })
	}
};

