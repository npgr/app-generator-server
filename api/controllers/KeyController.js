/**
 * KeyController
 *
 * @description :: Server-side logic for managing Keys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	get: function(req, res) {
		require('fs').readFile('./config/key', 'utf8', function(err, data) {
			if (err) res.end(JSON.stringify(err))
			res.end(data)
		})
	}
	
};

