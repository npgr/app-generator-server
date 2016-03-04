/**
 * DBController
 *
 * @description :: Server-side logic for managing languages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	main : function (req, res) {
		res.locals.dato1 = 'Este es el Dato 1'
		res.locals.dato2 = 'Este es el Dato 2'
		res.view("prueba/prueba.ejs")
	}
};