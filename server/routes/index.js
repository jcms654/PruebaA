var express = require('express');
var http = require('http');
var fs = require('fs')
const bodyParser = require('body-parser');
var router = express.Router();
///////////////////////////////////////////////////////////////////////////////////////
router.get('/', function(req, res){
		const http = require('http')
		const optionsC = {
		hostname: 'jsonplaceholder.typicode.com',
		port: 80,
		path: '/posts/'+req.query.post+'/comments',
		method: 'GET'
		}
		const optionsU = {
			hostname: 'jsonplaceholder.typicode.com',
			port: 80,
			path: '/users/1',
			method: 'GET'
		}
		const req1 = http.request(optionsU, res1 => {
			var strUsers = "";
			res1.on('data', (d) => { strUsers+=d;}).on('end',()=>{
				const req2 = http.request(optionsC, res2 => {
					var strComments = '';
					res2.on('data', (d) => { strComments+=d;}).on('end',()=>{
						let response = {
							"parte1":strUsers.replace(/\r?\n|\r/, ''),
							"parte2":strComments.replace(/\r?\n|\r/, '')
						}
						
						//res.send(JSON.stringify(response)); });})
						res.json(response); });})
					req2.on('error', error => {console.error(error);})
					req2.end()
			});
		})
		req1.on('error', error => {	console.error(error);})
		req1.end()
});
///////////////////////////////////////////////////////////////////////////////////////
module.exports = router;
