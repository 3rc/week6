var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var _ = require('underscore');

var allPlaces = [
{
	place: 'seville',
	top: '240px',
	left: '520px',
	nextCity: 'Canary Islands'
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
	console.log(selectedPlace['place'])
	res.render('voyage', {currentLocation:selectedPlace.place});

});

var server = app.listen(4635, function() {
	console.log('Express server listening on port ' + server.address().port);
});

