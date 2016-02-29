/**
* UserResource.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	//migrate: 'safe',

  attributes: {
	id: {
		//description: 'Id',
		type: "integer",
		primaryKey: true,
		autoIncrement: true,
		unique: true
	},
	user: {
		//description: 'User',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		model: 'User'
	},
	resource: {
		//description: 'Resource',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		model: 'Resource'
	},
	app: {
		//description: 'App',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		model: 'App'
	},
	model: {
		//description: 'Model',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		model: 'Model'
	}
//End Attributes
  }
};

