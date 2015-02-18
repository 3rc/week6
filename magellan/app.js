var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var _ = require('underscore');

var allPlaces = [
{
	place: 'seville',
	name: 'seville',
	top: '350px',
	left: '520px',
	landed: 1519,
	nextCity: 'canaryislands'
},
{
	place: 'canaryislands',
	name: 'canary islands',
	top: '380px',
	left: '500px',
	landed: 1519,
	nextCity: 'strait'
},
{
	place: 'strait',
	name: 'strait of magellan',
	top: '680px',
	left: '360px',
	landed: 1520,
	nextCity: 'guam'
},
{
	place: 'guam',
	name: 'guam',
	top: '440px',
	left: '960px',
	landed: 1521,
	nextCity: 'philippines'
},
{
	place: 'philippines',
	name: 'philippines',
	top: '440px',
	left: '860px',
	landed: 1521,
	note: 'Homeboy died',
	nextCity: 'capeverde'
},
{
	place: 'capeverde',
	name: 'cape verde',
	top: '420px',
	left: '470px',
	landed: 1522,
	note: 'The crew carried on without.',
	nextCity: '/'
}]

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/voyage/:place', function(req, res){
	var currentPlace = req.params.place.toLowerCase();
	var selectedPlace = _.find(allPlaces, function(place) {
		return place.place == currentPlace
	});
	var currentLocation = selectedPlace['place'];
	res.render('voyage', selectedPlace);
});

// need something for 'nextCity = null'



var server = app.listen(4635, function() {
	console.log('Express server listening on port ' + server.address().port);
});

