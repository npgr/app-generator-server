/**
* App.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	//migrate: 'alter',
	
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
	title: {
		//description: 'Title',
		//hide: true,
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
		enum: ['postgres', 'mysql', 'mongodb', 'redis', 'disk', 'orientdb', 'filemaker']
		//,enumdes: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Disk', 'OrientDB', 'FileMaker']
	},
	port: {
		//description: 'Port',
		type: 'integer',
		required: true
	},
	status: {
		//description: 'Status',
		type: 'string',
		enum: ['started', 'stopped']
		//,enumdes: ['Started', 'Stopped']
	},
	author: {
		//description: 'Author',
		//hide: true,
		type: 'string'
	},
	license: {
		//description: 'License',
		//hide: true,
		type: 'string'
	},
	repository: {
		//description: 'Repository',
		//hide: true,
		type: 'string'
	},
//End Attributes	
  }
};

