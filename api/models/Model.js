/**
* Model.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  //migrate: 'safe',

  attributes: {
	//_title: 'Model',
	//_dialog_width: '30em',
	//_card_width: '57em',  
	//_btn_left: '30px', 		
	//_columns: 'disabled', 	
	//_new: 'enabled',
	//_edit: 'enabled',
	//_display: 'disabled',
	//_delete: 'disabled',
	//_print: 'enabled',
	//_download: 'enabled',
	//_ga: 'disabled',
	id: {
		//description: 'Id',
		//hide: true,
		type: "integer",
		primaryKey: true,
		autoIncrement: true,
		unique: true
	},
	app: {
		//description: 'App',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		//hide: true,
		model: 'App'
	},
	name: {
		//description: 'Name',
		type: 'string',
		required: true
	},
	title: {
		//description: 'Title',
		type: 'string',
		required: true
	}
//End Attributes
  }
  /*,afterCreate: function (values, next) {
	errorx = function errorx(err, data) {
		if (err) {
			console.log('Error After Create Model: ', err)
			return next(err);
		}
		//res.redirect("<%= model%>/list")
	}
	var functionx = {app: values.app, model: values.id, name: 'List '+values.name, type:'list'}
	ModelFunction.create(functionx, errorx)
	next()
  }*/
};

