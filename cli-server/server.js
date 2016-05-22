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
		var obj = JSON.parse(req.headers.data)
		console.log('data: ', obj)
		//console.log('Response Succefull')
		res.end('Response Succefull')
	}
	else 
	{
		res.end('Invalid Request: ' + req.url);
		console.log('Invalid Request: ' + req.url)
	}
}