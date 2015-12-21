
/************  Routes:  config/routes.js ************/

"/app/exist/:id": "appController.exist",
"/app/list": "appController.list"

/********** Controller: api/controllers/<<model_name>>Controller.js *******/

	exist: function(req, res, next) {
		var id = req.param("id")
		 app.findOne(id)
			.exec(function(err, data) {
				if(err) res.json({ "exist": "error"})
				  else if (!data) res.json({ "exist": false})
					else res.json({ "exist": true})
			})
	}
	/*, display: function(req, res) {
		res.view("app/display")
	},
	new: function (req, res) {
		res.view("app/new")
	},
	edit: function (req, res) {
		res.view("app/edit")
	},
	delete: function (req, res) {
		res.view("app/delete")
	},
	columns: function (req, res) {
		res.view("app/columns")
	},*/
	list : function (req, res) {
		//app.find()
		//	.exec(function(err, data){
				res.locals.resources = req.session.resources
				res.locals.user = {user: req.session.user, name: req.session.username}
		//		res.locals.data = JSON.stringify(data)
				res.locals.data = []
				res.view("app/list")
		//	})
	}
	/*,byfield: function(req, res) {
		app.query('SELECT field, count(*) FROM app group by field order by count desc', function(err, data) {
			if (err) return res.serverError(err);
			//return res.ok(results);
			return res.json(data.rows)
		});
	}*/
