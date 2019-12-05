const fs = require('fs');
const ndjson = require('ndjson');

//sæki regnboga myndir
let rainbow = [];
fs.createReadStream('rainbow.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj){
  	rainbow.push(obj);
  })
//sæki katta myndir
let cat = [];
fs.createReadStream('cat.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj){
  	cat.push(obj);
  })
//sæki hunda myndir
let dog = [];
fs.createReadStream('dog.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj){
  	dog.push(obj);
  })
//sæki húsa myndir
let house = [];
fs.createReadStream('house.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj){
  	house.push(obj);
  })
//sæki epla myndir
let apple = [];
fs.createReadStream('apple.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj){
  	apple.push(obj);
  })

const express = require('express');
const app = express();
var port = process.env.PORT || 8080;


app.listen(port, () => {
	console.log('Example app listening on port 3000!')
}); 
//vel regnboga mynd
app.get('/rainbow', (request, response) => {
	const index = Math.floor(Math.random()*rainbow.length);
	response.send(rainbow[index]);
});
//vel katta mynd
app.get('/cat', (request, response) => {
	const index = Math.floor(Math.random()*cat.length);
	response.send(cat[index]);
});
app.get('/dog', (request, response) => {
	const index = Math.floor(Math.random()*dog.length);
	response.send(dog[index]);
});
app.get('/house', (request, response) => {
	const index = Math.floor(Math.random()*house.length);
	response.send(house[index]);
});
app.get('/apple', (request, response) => {
	const index = Math.floor(Math.random()*apple.length);
	response.send(apple[index]);
});

app.use(express.static('public'))
