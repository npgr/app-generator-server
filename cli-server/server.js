var http = require('http');

var PORT = 7272
 
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on Port: %s", PORT);
});

function handleRequest(req, res){
	console.log('request for: ', req.url) 
	if (req.method == 'POST')
	{
		jsondata = JSON.parse(req.headers.data)
		model = req.headers.model
		//console.log('data: ', obj)
		crud5 = require('./crud5')
		var data = crud5.generate('crud')
		
		console.log('Data: ',data)
		//console.log('Response Succefull')
		//res.end('Response Succefull')
		res.setHeader('data-routes', '/User/exist/:id: UserController.exist,/User/list: UserController.list)')
		res.end(data)
	}
	else 
	{
		res.end('Invalid Request: ' + req.url);
		console.log('Invalid Request: ' + req.url)
	}
}