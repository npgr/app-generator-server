var should = require('chai').should()
const http = require('http');

var host = 'localhost'
var port = 4581
describe('Generator Server', function() {
	describe('Login page',function(){
		it('Redirecting to login Page', function(done) { 
			var options = { host: host, port: port, path:'/', method: 'GET' }
	
			var request = http.request(options,function(res){
				//res.status.should.equal(200)
				should.exist(res)
				res.on('data', function(data_stream) {
					//console.log(data.toString())
					var x = data_stream.toString().indexOf('Found. Redirecting to /login')
					x.should.equal(0)
					done()
				})
			})
			request.on('error', function(err) {
				done(err)
			})
			request.end();
		})
		/** Load Login Page */
		it('load login Page', function(done) {
			var options = { host: host, port: port, path:'/login', method: 'GET' }
	
			var request = http.request(options,function(res){
				//res.status.should.equal(200)
				should.exist(res)
				res.on('data', function(data_stream) {
					//console.log(data_stream.toString())
					var x = data_stream.toString().indexOf('<title>Login App</title>')
					x.should.at.least(1)
					done()
				})
			})
			request.on('error', function(err) {
				done(err)
			})
			request.end();
		})
	})
})
describe('Key Server', function() {
	//describe('Key Value', function() {
		it('Key', function(done) {
			done()
			
		})	
	//})
})