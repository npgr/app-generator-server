/**
* App.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	//migrate: 'safe',
	
  attributes: {
	//_title: 'App',
	//_dialog_width: '33em',
	//_card_width: '64em',  
	//_btn_left: '30px', 		
	//_columns: 'enabled', 	
	//_new: 'enabled',
	//_edit: 'enabled',
	//_display: 'enabled',
	//_delete: 'enabled',
	//_print: 'enabled',
	//_download: 'enabled',
	//_ga: 'disabled',
	id: {
		//description: 'Id',
		//hide: true,
		type: 'integer',
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	name: {
		//description: 'Name',
		type: 'string',
		required: true
	},
	version: {
		//description: 'Version',
		type: 'string'
	},
	description: {
		//description: 'Description',
		//textarea_cols: 42,
		//textarea_rows: 3,
		//hide: true,
		type: 'string'
	},
	type: {
		//description: 'Type',
		type: 'string',
		enum: ['web', 'web2', 'desktop', 'mobil']
		//,enumdes: ['Web App (Browser)', 'Web App (electron)', 'Desktop', 'Mobil']
	},
	db: {
		//description: 'Database',
		type: 'string',
		enum: ['postgres', 'mysql', 'mongodb', 'disk', 'rethinkdb', 'cassandra', 'leveldb']
		//,enumdes: ['PostgreSQL', 'MySQL', 'MongoDB', 'Disk', 'RethinkDB', 'Cassandra', 'LevelDB']
	},
	path: {
		//description: 'Path',
		type: 'string',
		//textarea_cols: 42,
		//textarea_rows: 3,
		//hide: true,
		required: true
	},
	port: {
		//description: 'Port',
		type: 'integer',
		required: true
	},
	repository: {
		//description: 'Repository',
		//hide: true,
		type: 'string'
	},
//End Attributes	
  }
};

