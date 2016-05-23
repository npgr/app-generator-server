
/************  Routes:  config/routes.js ************/

"/App/exist/:id": "AppController.exist",
"/App/list": "AppController.list"

/********** Controller: api/controllers/<<model_name>>Controller.js *******/

	exist: function(req, res, next) {
		var id = req.param("id")
		 App.findOne(id)
			.exec(function(err, data) {
				if(err) res.json({ "exist": "error"})
				  else if (!data) res.json({ "exist": false})
					else res.json({ "exist": true})
			})
	}
	/*, display: function(req, res) {
		res.view("App/display")
	},
	new: function (req, res) {
		res.view("App/new")
	},
	edit: function (req, res) {
		res.view("App/edit")
	},
	delete: function (req, res) {
		res.view("App/delete")
	},
	columns: function (req, res) {
		res.view("App/columns")
	},*/
	list : function (req, res) {
		//App.find()
		//	.exec(function(err, data){
				res.locals.resources = req.session.resources
				res.locals.user = {id: req.session.userid, user: req.session.user, name: req.session.username, email: req.session.email, language: req.session.languagePreference}
		//		res.locals.data = JSON.stringify(data)
				res.locals.data = []
				res.view("App/list")
		//	})
	}
	/*,byfield: function(req, res) {
		App.query('SELECT field, count(*) FROM App group by field order by count desc', function(err, data) {
			if (err) return res.serverError(err);
			//return res.ok(results);
			return res.json(data.rows)
		});
	}*/
