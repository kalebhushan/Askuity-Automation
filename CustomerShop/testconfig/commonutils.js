//npm request module
var request = require('request');
var commonutils = function() {
	//define all base urls
	this.urls = {
		'home': 'http://automationpractice.com',
	};
	//define all paths
	this.routes = {
		'homepage': '/index.php'
	};	
	//construct the url of home page
	this.getHomePage = function(page) {
		return (page == null)? '' : this.urls['home'] + this.routes[page];
	};	
	
	this.pages = {
		'homepage' : this.getHomePage('homepage')
	};
};
module.exports = new commonutils();