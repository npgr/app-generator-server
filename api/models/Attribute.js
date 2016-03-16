/**
* Attribute.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  //migrate: 'alter',

  attributes: {
	//_title: 'Atributo',
	//_unique: ['model', 'attribute'],
	//_dialog_width: '33em',
	id: {
		//description: 'Id',
		//hide: true,
		type: 'integer',
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	pos: {
		//description: 'Pos',
		type: 'integer'
	},
	model: {
		//description: 'Model',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		//hide: true,
		model: 'Model'
	},
	attribute: {
		//description: 'Attribute',
		type: "string",
		required: true
	},
	description: {
		//description: 'Description',
		type: "string"
	},
	type: {
		//description: 'Type',
		type: 'string',
		enum: ['integer', 'string', 'float', 'date', 'boolean']
		//,enumdes: ['integer', 'string', 'float', 'date', 'boolean']
	},
	required: {
		//description: 'Required',
		type: 'boolean',
		enum: [true, false]
		//,enumdes: ['Yes', 'No']
	},
	hide: {
		//description: 'Hide',
		type: 'boolean',
		enum: [true, false]
		//,enumdes: ['Yes', 'No']
	},
	omit: {
		//description: 'Omit',
		type: 'boolean',
		enum: [true, false]
		//,enumdes: ['Yes', 'No']
	},
	textarea_cols:{
		//description: 'TextArea Cols',
		//hide: true,
		type: 'integer'
	},
	textarea_rows:{
		//description: 'TextArea Rows',
		//hide: true,
		type: 'integer'
	},
	enum: {
		//description: 'Enum',
		//textarea_cols: 60,
		//textarea_rows: 3,
		//hide: true,
		type: 'string'
	},
	enumdes: {
		//description: 'EnumDes',
		//textarea_cols: 60,
		//textarea_rows: 3,
		//hide: true,
		type: 'string'
	},
	ref_model: {
		//description: 'Reference Model',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		//hide: true,
		model: 'Model'
	},
	model_key: {
		//description: 'Mdl Key',
		//hide: true,
		type: 'string'
	},
	key_type: {
		//description: 'Key Type',
		//hide: true,
		type: 'string',
		enum: ['integer', 'string', 'float', 'date', 'boolean']
		//,enumdes: ['integer', 'string', 'float', 'date', 'boolean']
	},
	model_display: {
		//description: 'mdl Display',
		//key: id,
		//key_type: 'integer',
		//display: 'name',
		//type: 'string',
		//hide: true,
		model: 'Attribute'
	},
	maxLength: {
		//description: 'Max Length',
		//hide: true,
		type: 'integer'
	},
	min: {
		//description: 'Min Value',
		//hide: true,
		type: 'integer'
	},
	max: {
		//description: 'Max Value',
		//hide: true,
		type: 'integer'
	}
//End Attributes
  },
	afterCreate: function (attr, next) {
		errorx = function errorx(err, data) {
			if (err) {
				console.log('Error After Create Model: ', err)
				return next(err);
			}
			//res.redirect("<%= model%>/list")
		}
		ModelFunction.find({model: attr.model})
			.exec(function(err, func) {
				//console.log('function: ',func)
				var funcAttr = {}
				for (i=0; i < func.length; i++) {
				  if (func[i].type != "download" && func[i].type != "columns")
				  {
					funcAttr = {model: func[i].model, functionx: func[i].id, attribute: attr.id, display:'Yes'}
					FunctionAttribute.create(funcAttr, errorx)
				  }
				}
				next()
		})
	}
};

