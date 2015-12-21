/**
* App.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	//migrate: 'alter',
	
  attributes: {
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
		required: true
	},
	port: {
		//description: 'Port',
		type: 'integer',
		required: true
	},
	repository: {
		//description: 'Repository',
		type: 'string'
	},
//End Attributes	
  }
};

