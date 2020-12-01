'use strict';

var summarypage = function() {
};

summarypage.prototype = Object.create({}, {

	summaryTitle: {
		get:function() {
			return element(by.xpath("//h1[@id='cart_title']"));
		}
	},

    proceedBtn: {
		get:function() {
			return element(by.xpath("//p[contains(@class,'cart_navigation')]/a[@title='Proceed to checkout']"));
		}
	}
});

module.exports = summarypage;