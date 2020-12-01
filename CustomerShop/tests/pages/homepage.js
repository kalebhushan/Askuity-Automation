'use strict';

var homepage = function() {
};

homepage.prototype = Object.create({}, {

	womenMenu: {
		get:function() {
			return element(by.xpath("//a[@title='Women']"));
		}
	},

	womenSummerDress: {
	    get:function() {
        	return element(by.xpath("//a[@title='Summer Dresses']"));
        }
	}
});

module.exports = homepage;