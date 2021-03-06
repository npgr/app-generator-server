var fs = require('fs')
var jsonic = require('jsonic')
var _ = require('lodash')

function getInputType(type) {
	switch(type) {
		case 'string':
			return 'text'
			break
		case 'boolean':
			return 'boolean'
			break
		case 'integer':
			return 'number'
			break
		case 'float':
			return 'float'
			break
		case 'date':
			return 'date'
			break
		case 'password':
			return 'password'
			break
		default:
			return 'text'
	}
}

function generate_app_config() {
	var APP_CONFIG = fs.readFileSync('./templates/crud5/app-config.template', 'utf8');
	if (!fs.existsSync('assets/components/app-config'))
	{
		fs.mkdirSync('assets/components/app-config')
		fs.writeFile('assets/components/app-config/app-config.js', APP_CONFIG, function (err) {
			if (err) console.log(err);
			console.log('Created file assets/components/app-config/app-config.js')
		})
	}
	else console.log('File assets/components/app-config/app-config.js already exist')
}

function generate_app_util() {
	var APP_UTIL = fs.readFileSync('./templates/crud5/app-util.template', 'utf8');
	if (!fs.existsSync('assets/components/app-util'))
	{
		fs.mkdirSync('assets/components/app-util')
		fs.writeFile('assets/components/app-util/app-util.js', APP_UTIL, function (err) {
			if (err) console.log(err);
			console.log('Created file assets/components/app-util/app-util.js')
		})
	}
	else console.log('File assets/components/app-util/app-util.js already exist')
}

function generate_controller(key, crud) {
	var CONTROLLER_TEMPLATE = fs.readFileSync('./templates/crud5/controller.template', 'utf8');
	var compiled_Controller = _.template(CONTROLLER_TEMPLATE)

	return compiled_Controller({ 'model': model, 'key': key, 'crud': crud})
	
	/*fs.writeFile('templates/crud5/controller.js', controller, function (err) {
		if (err) console.log(err);
		console.log('Created file templates/crud5/controller.js')
	})*/
}

function generate_language(title, keys, jsondata) {
	var LANGUAGE_TEMPLATE = fs.readFileSync('./templates/crud5/language.template', 'utf8');
	var compiled_Language = _.template(LANGUAGE_TEMPLATE)

	var language = compiled_Language({ 'title': title, 'keys': keys, 'jsondata': jsondata })
		
	return language
	/*fs.writeFile('templates/crud5/language.json', language, function (err) {
		if (err) console.log(err);
		console.log('Created file templates/crud5/language.json')
	})*/
}

function srv(crud, word) {
	if (crud == "crud6")
		return ">%= lng('" + word + "')%<"
	 else
	    return word
}

function set_jsondata_lines(crud, keys) {
	var line_c = ''; var line_r = ''; var line_u = ''; var line_d = ''; var type= ''
	
	for (i=0; i < keys.length; i++)
	{
	  if (keys[i].substring(0,1) != '_')
	  {
		if (jsondata[keys[i]].enum)
		{
			// <select>
			line_c = '<select id="'+keys[i]+'" name="'+keys[i]+'">\n'
			line_u = line_c
			line_r = '<select id="'+keys[i]+'" name="'+keys[i]+'" disabled>\n'
			line_d = line_r
			// <option>
			for (j=0; j<jsondata[keys[i]].enum.length; j++)
			{					
				line_c += '\t\t\t\t\t\t<option value="'+jsondata[keys[i]].enum[j]+'">'+ srv(crud, jsondata[keys[i]].enumdes[j])+'</option>\n'
				line_r += '\t\t\t\t\t\t<option value="'+jsondata[keys[i]].enum[j]+'">'+ srv(crud, jsondata[keys[i]].enumdes[j])+'</option>\n'
				line_u += '\t\t\t\t\t\t<option value="'+jsondata[keys[i]].enum[j]+'">'+ srv(crud, jsondata[keys[i]].enumdes[j])+'</option>\n'
				line_d += '\t\t\t\t\t\t<option value="'+jsondata[keys[i]].enum[j]+'">'+ srv(crud, jsondata[keys[i]].enumdes[j])+'</option>\n'
			}
			line_c += '\t\t\t\t\t</select>'
			line_r += '\t\t\t\t\t</select>'
			line_u += '\t\t\t\t\t</select>'
			line_d += '\t\t\t\t\t</select>'
		}
		else  // <input>
		{
			if (jsondata[keys[i]].password) jsondata[keys[i]].type = 'password'
			type = getInputType(jsondata[keys[i]].type)
			// input field
			if (jsondata[keys[i]].textarea_cols)
				line_c = '<textarea id="'+keys[i]+'" name="'+keys[i]+'" rows="'+jsondata[keys[i]].textarea_rows+'" cols="'+jsondata[keys[i]].textarea_cols+'"'
			 else
				line_c = '<input id="'+keys[i]+'" type="'+ type +'" name="'+keys[i]+'"'
			if (jsondata[keys[i]].type == "float")
				line_c = '<input id="'+keys[i]+'" type="number" step="0.01" name="'+keys[i]+'"'
			line_r = line_c
			line_u = line_c
			line_d = line_c
			// input values for rud
			if (!jsondata[keys[i]].model)
			{
				line_r += ' value="{{item.'+keys[i]+'}}"'
				line_u += ' value="{{item.'+keys[i]+'}}"'
				line_d += ' value="{{item.'+keys[i]+'}}"'
			}
			else  // model
			{
				if (jsondata[keys[i]].key_type != 'integer' && jsondata[keys[i]].key_type != 'float') 
				{
					line_c += ' key=""'
					line_u += ' key="{{item.'+keys[i]+'_id}}"'
				}
				else
				{
					line_c += ' key=0'
					line_u += ' key={{item.'+keys[i]+'_id}}'
				}
				line_r += ' value="{{item.'+keys[i]+'_'+ jsondata[keys[i]].display +'}}"'
				line_u += ' value="{{item.'+keys[i]+'_'+ jsondata[keys[i]].display +'}}"'
				line_d += ' value="{{item.'+keys[i]+'_'+ jsondata[keys[i]].display +'}}"'
			}
			// maxLength
			if (jsondata[keys[i]].maxLength)
			{
				line_c += ' maxlength='+jsondata[keys[i]].maxLength
				line_u += ' maxlength='+jsondata[keys[i]].maxLength
			}
			// min 	
			if (jsondata[keys[i]].min)
			{
				line_c += ' min='+jsondata[keys[i]].min
				line_u += ' min='+jsondata[keys[i]].min
			}
			//max
			if (jsondata[keys[i]].max)
			{
				line_c += ' max='+jsondata[keys[i]].max
				line_u += ' max='+jsondata[keys[i]].max
			}
			// required
			if (jsondata[keys[i]].required)
			{
				line_c += ' required'
				line_u += ' required'
			}
			// DefaultTo (Fixed Value)
			if (jsondata[keys[i]].defaultsTo)
			{
				line_c += ' value="'+jsondata[keys[i]].defaultsTo+'" disabled'
				line_u += ' value="'+jsondata[keys[i]].defaultsTo+'" disabled'
			} else {
				if (jsondata[keys[i]].primaryKey) {
					line_u += ' disabled'
					if (jsondata[keys[i]].autoIncrement)
							line_c += ' disabled'
				}
			}
			//end of input field
			line_r += ' disabled'
			line_d += ' disabled'
			if (jsondata[keys[i]].model)
			{
				line_c += ' on-click="select_field" readonly'
				line_u += ' on-click="select_field" readonly'
			}
			line_c += '>'
			line_r += '>'
			line_u += '>'
			line_d += '>'
			if (jsondata[keys[i]].textarea_cols)
			{
				line_c += '</textarea>'
				line_r += '</textarea>'
				line_u += '</textarea>'
				line_d += '</textarea>'
			}
		}
	  jsondata[keys[i]].line_c = line_c
	  jsondata[keys[i]].line_r = line_r
	  jsondata[keys[i]].line_u = line_u
	  jsondata[keys[i]].line_d = line_d
	  //console.log(jsondata[keys[i]].line_u)
	  }
	}
}

function generate_new_form(keys, key, title, crud) {
	var NEW_FORM_TEMPLATE = fs.readFileSync('./templates/crud5/new-form.template', 'utf8');
	var compiled_New_Form = _.template(NEW_FORM_TEMPLATE)
	// crud = crud6 : Server Side (views/.ejs)) else client side (assets/components/.html)
	var new_form = compiled_New_Form({'title':title,'model':model,'key':key,'keys':keys,'jsondata':jsondata, 'crud': crud})
	
	new_form = new_form.replace(/>%/g, '<%')
	new_form = new_form.replace(/%</g, '%>')
	// Create Folder if not exist
	//if (crud == 'crud6')
		NEW_FORM = new_form
	 /*else {
		var path = 'assets/components/'+model+'-new'
	
		if (!fs.existsSync(path))  fs.mkdirSync(path)
	
		path += '/'+model+'-new.html'
	
		fs.writeFile(path, new_form, function (err) {
			if (err) console.log(err);
			console.log('Created file '+path)
		})
	}*/
}

function generate_display_form(keys, key, title, crud){
	var DISPLAY_FORM_TEMPLATE = fs.readFileSync('./templates/crud5/display-form.template', 'utf8');
	var compiled_Display_Form = _.template(DISPLAY_FORM_TEMPLATE)
	
	var display_form = compiled_Display_Form({'title':title,'model':model,'key':key,'keys':keys,'jsondata':jsondata, 'crud': crud})
	
	display_form = display_form.replace(/>%/g, '<%')
	display_form = display_form.replace(/%</g, '%>')
	// Create Folder if not exist
	
	//if (crud == 'crud6')
		DISPLAY_FORM = display_form
	 /*else {
		var path = 'assets/components/'+model+'-display'
	
		if (!fs.existsSync(path))  fs.mkdirSync(path)
	
		path += '/'+model+'-display.html'
	
		fs.writeFile(path, display_form, function (err) {
			if (err) console.log(err);
			console.log('Created file '+path)
		})
	}*/
}

function generate_delete_form(keys, key, title, crud) {
	var DELETE_FORM_TEMPLATE = fs.readFileSync('./templates/crud5/delete-form.template', 'utf8');
	var compiled_Delete_Form = _.template(DELETE_FORM_TEMPLATE)
	
	var delete_form = compiled_Delete_Form({'title':title,'model':model,'key':key,'keys':keys,'jsondata':jsondata, 'crud': crud})
	
	delete_form = delete_form.replace(/>%/g, '<%')
	delete_form = delete_form.replace(/%</g, '%>')
	// Create Folder if not exist
	//if (crud == 'crud6')
		DELETE_FORM = delete_form
	 /*else {
		var path = 'assets/components/'+model+'-delete'
	
		if (!fs.existsSync(path))  fs.mkdirSync(path)
	
		path += '/'+model+'-delete.html'
	
		fs.writeFile(path, delete_form, function (err) {
			if (err) console.log(err);
			console.log('Created file '+path)
		})
	}*/
}

function generate_edit_form(keys, key, title, crud) {
	var EDIT_FORM_TEMPLATE = fs.readFileSync('./templates/crud5/edit-form.template', 'utf8');
	var compiled_Edit_Form = _.template(EDIT_FORM_TEMPLATE)
	
	var edit_form = compiled_Edit_Form({'title':title,'model':model,'key':key,'keys':keys,'jsondata':jsondata, 'crud': crud})
	
	edit_form = edit_form.replace(/>%/g, '<%')
	edit_form = edit_form.replace(/%</g, '%>')
	// Create Folder if not exist
	//if (crud == 'crud6')
		EDIT_FORM = edit_form
	 /*else {
		var path = 'assets/components/'+model+'-edit'
	
		if (!fs.existsSync(path))  fs.mkdirSync(path)
	
		path += '/'+model+'-edit.html'
	
		fs.writeFile(path, edit_form, function (err) {
			if (err) console.log(err);
			console.log('Created file '+path)
		})
	}*/
}

function generate_list_columns(keys, title, crud) {
	var LIST_COLUMNS_TEMPLATE = fs.readFileSync('./templates/crud5/columns-form.template', 'utf8');
	var compiled_List_Columns = _.template(LIST_COLUMNS_TEMPLATE)
	
	var list_columns = compiled_List_Columns({'title':title,'keys':keys, 'crud': crud})
	
	list_columns = list_columns.replace(/>%/g, '<%')
	list_columns = list_columns.replace(/%</g, '%>')
	// Create Folder if not exist
	//if (crud == 'crud6')
		COLUMNS_FORM = list_columns
	 /*else {
		var path = 'assets/components/'+model+'-list-columns'
	
		if (!fs.existsSync(path))  fs.mkdirSync(path)
	
		path += '/'+model+'-list-columns.html'
	
		fs.writeFile(path, list_columns, function (err) {
			if (err) console.log(err);
			console.log('Created file '+path)
		})
	}*/
}

function generate_model_select(model, display, key, description, crud) {
	//if (!fs.existsSync('assets/components/'+model+'-select/'+model+'-select.html'))
	//{
		var SELECT_MODEL_TEMPLATE = fs.readFileSync('./templates/crud5/select-model.template', 'utf8');
		var compiled_Select_Model = _.template(SELECT_MODEL_TEMPLATE)
	
		var select_model = compiled_Select_Model({'model':model,'display':display,'key':key,'description':description, 'crud': crud})
		
		select_model = select_model.replace(/>%/g, '<%')
		select_model = select_model.replace(/%</g, '%>')
		// Create Folder if not exist
		SELECT_FORMS += '\n'+select_model
		
		/*var path = 'assets/components/'+model+'-select'
		if (crud == 'crud6')  path = 'views/'+model
	
		if (!fs.existsSync(path))	fs.mkdirSync(path)

		if (crud == 'crud6')
			path += '/select.ejs'
		  else
			path += '/'+model+'-select.html'
	
		fs.writeFile(path, select_model, function (err) {
			if (err) console.log(err);
			console.log('Created file '+path)
		})*/
	//}
	//else  console.log('File '+path+' already Exist')
}

function generate_list_page(keys, key, title, crud, card_width, dialog_width, btn_left, columns, download, print, new_reg, edit, delete_reg, display, ga) {
	var LIST_TEMPLATE = fs.readFileSync('./templates/crud5/list.template', 'utf8');
	var compiled_List = _.template(LIST_TEMPLATE)
	
	var first = true
	var attrs = ''
	// get_attrs function 
	for (i=0; i < keys.length; i++)
	{
		if (keys[i].substring(0,1) != '_')
		{ 
		  if (!first) 
			 attrs += '\t\t\t\t'
		   else	first = false
		  if (jsondata[keys[i]].enum)
		  {
			var enumdes = JSON.stringify(jsondata[keys[i]].enumdes)
			if (crud == 'crud6')
			{
				enumdes = enumdes.replace(/","/g, '")%>","<%= lng("')
				enumdes = enumdes.replace(/\["/g, '["<%= lng("')
				enumdes = enumdes.replace(/"\]/g, '")%>"]')
			}
			attrs += '{column: "'+keys[i]+'", enum: '+JSON.stringify(jsondata[keys[i]].enum)+', enumdes: '+enumdes+', display: '
			if (!jsondata[keys[i]].hide) attrs += 'true}'
				else attrs += 'false}'
		  }
		  else
			if (!jsondata[keys[i]].model)
			{
				attrs += '{column: "'+keys[i]+'", type: "'+jsondata[keys[i]].type+'", display: '
				if (!jsondata[keys[i]].hide) attrs += 'true}'
					else attrs += 'false}'
			}
			else 
			{
				attrs += '{column: "'+keys[i]+'_'+jsondata[keys[i]].key+'", type: "'+jsondata[keys[i]].key_type+'", model: "'+jsondata[keys[i]].model+'", display: false},\n\t\t\t\t'
				attrs += '{column: "'+keys[i]+'_'+jsondata[keys[i]].display+'", type: "'+jsondata[keys[i]].type+'", model: "'+jsondata[keys[i]].model+'", display: '
				if (!jsondata[keys[i]].hide) attrs += 'true}'
					else attrs += 'false}'
			}
		  if (i < keys.length-1)
			attrs += ',\n'
		   else
			attrs += '\n'
		}
	}
	
	var IMPORT_FORM = fs.readFileSync('./templates/crud5/import-form.template', 'utf8');
	
	//var TOPBAR = fs.readFileSync('./templates/crud5/topBar.template', 'utf8');
	
	var list_template = compiled_List({ 'title': title , 'attrs': attrs, 'model': model, 'import_form': IMPORT_FORM, 'columns_form': COLUMNS_FORM, 'new_form': NEW_FORM, 'display_form': DISPLAY_FORM, 'edit_form': EDIT_FORM, 'delete_form': DELETE_FORM, 'select_forms': SELECT_FORMS, 'key': key, 'keys': keys, 'jsondata': jsondata, 'crud': crud, 'card_width': card_width, 'dialog_width': dialog_width, 'btn_left': btn_left, 'columns': columns, 'download': download, 'print': print, 'new_reg': new_reg, 'edit': edit, 'delete_reg': delete_reg, 'display': display, 'ga': ga})
	
	//list_template = list_template.replace('>%', '<%')
	//list_template = list_template.replace('%<', '%>')
	list_template = list_template.replace(/>%/g, '<%')
	list_template = list_template.replace(/%</g, '%>')
	
	return list_template
	// Create Folder if not exist
	/*var path = 'assets/'+model
	if (crud == 'crud6')  path = 'views/'+model
		
	if (!fs.existsSync(path))	fs.mkdirSync(path)

	if (crud == 'crud6')
		path += '/list.ejs'
	  else
		path += '/list.html'

	fs.writeFile(path, list_template, function (err) {
		if (err) console.log(err);
		console.log('Created file '+path)
	})*/
}

exports.generate = function(crud) {
// ** Crud with Polymer & templates
	var keys = Object.keys(jsondata)
	var title = model
	var card_width = '80em'
	var dialog_width = '30em'
	var btn_left = '80px'
	var columns = true
	var print = true
	var download = true
	var new_reg = true 
	var edit = true
	var delete_reg = true
	var display = true
	var ga = false  // Google Analytics
	
	if (keys.indexOf('_title') >= 0)  
		title = jsondata._title
	if (keys.indexOf('_card_width') >= 0)
		card_width = jsondata._card_width
	if (keys.indexOf('_dialog_width') >= 0)
		dialog_width = jsondata._dialog_width
	if (keys.indexOf('_btn_left') >= 0)
		btn_left = jsondata._btn_left
	if (keys.indexOf('_columns') >= 0 & jsondata._columns == 'disabled')
		columns = false
	if (keys.indexOf('_print') >= 0 & jsondata._print == 'disabled')
		print = false
	if (keys.indexOf('_download') >= 0 & jsondata._download == 'disabled')
		download = false
	if (keys.indexOf('_new') >= 0 & jsondata._new == 'disabled')
		new_reg = false
	if (keys.indexOf('_edit') >= 0 & jsondata._edit == 'disabled')
		edit = false
	if (keys.indexOf('_delete') >= 0 & jsondata._delete == 'disabled')
		delete_reg = false
	if (keys.indexOf('_display') >= 0 & jsondata._display == 'disabled')
		display = false
	if (keys.indexOf('_ga') >= 0 & jsondata._ga == 'enabled')
		ga = true
	// Key
	var key= {}
	for (k=0; k < keys.length; k++ ) {
		if (jsondata[keys[k]].primaryKey) {
			key = jsondata[keys[k]]
			key.name = keys[k]
			break
		}
	}
	// Omit Fields
	for (k=0; k < keys.length; k++ ) {
		if (jsondata[keys[k]].omit) {
			delete jsondata[keys[k]]
			keys.splice(k, 1)
		}
	}
	// Relations
	var relation = []
	var i = 0
	for (k=0; k < keys.length; k++ ) {
		if (jsondata[keys[k]].model) {
			relation[i] = {}
			relation[i].model = jsondata[keys[k]].model
			relation[i].description = jsondata[keys[k]].description
			relation[i].key = jsondata[keys[k]].key
			relation[i].display = jsondata[keys[k]].display
			i++
		}
	}
	// input field on form
	set_jsondata_lines(crud, keys)
	
	// Models: User, Profile, Resources
	// Login Form, userController.login, user.controller.validateLogin, policy Authorized
	// TopBar
	var data = generate_controller(key, crud)
	data += generate_language(model, keys, jsondata)

	//generate_app_config()
	//generate_app_util()
	
	NEW_FORM = ''
	DISPLAY_FORM = ''
	DELETE_FORM = ''
	EDIT_FORM = ''
	COLUMNS_FORM = ''
	
	if (new_reg) generate_new_form(keys, key, title, crud)
	if (display) generate_display_form(keys, key, title, crud)
	if (delete_reg) generate_delete_form(keys, key, title, crud)	
	if (edit) generate_edit_form(keys, key, title, crud)

	if (columns) generate_list_columns(keys, title, crud)

	SELECT_FORMS = ''
	for (i=0; i<relation.length; i++)
		generate_model_select(relation[i].model, relation[i].display, relation[i].key, relation[i].description, crud)
	
	data += '/******* CRUD *******/\n'
	data += generate_list_page(keys, key, title, crud, card_width, dialog_width, btn_left, columns, download, print, new_reg, edit, delete_reg, display, ga)
	
	return data
	// resume-bar ??
}

/** On Client Side **/
/*exports.get_model = function(cb)
{
	if (model) {
		//console.log('creating a create page for model '+ model)
		fs.readFile('api/models/'+model+'.js', 'utf-8', function (err, data) {
			if (err) {
				console.log(err)
				return false
			}
			else {
				var start = data.indexOf("attributes: {")
				//var end = data.indexOf("};")
				var end = data.indexOf("//End Attributes")
				if (end == -1)
				{
					console.log('Missing //End Attributes directive on model file')
					process.exit()
				}
				data = data.substring(start+12, end-1)
				data += '}'
				//jsondata = JSON.parse(data)
				// pending replace all //
				data = data.replace(/\//g, '')
				cb(jsonic(data))
			}
		})
	}
}*/

