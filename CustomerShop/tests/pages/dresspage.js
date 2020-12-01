'use strict';

var dresspage = function() {
};

dresspage.prototype = Object.create({}, {

    summerDressTitle: {
		get:function() {
			return element(by.xpath("//h1[contains(@class,'page-heading')]"));
		}
	},

    summerDressCatTile: {
		get:function() {
			return element(by.xpath("//div[@class='content_scene_cat']"));
		}
	},

    pageLogo: {
		get:function() {
			return element(by.xpath("//a[@title='My Store']"));
		}
	},

	summerDressQuickView: {
		get:function() {
			return element.all(by.xpath("//a[@title='Printed Summer Dress']/../a[@class='quick-view']"));
		}
	},

	summerDressIcon: {
    	get:function() {
    		return element.all(by.xpath("//img[@title='Printed Summer Dress']"));
    	}
    },

    summerDressSize: {
    	get:function() {
    		return element(by.xpath("//select[@id='group_1']"));
    	}
    },

    summerDressSizeOption: {
    	get:function() {
    		return element(by.xpath("//select[@id='group_1']/option[@value='1']"));
    	}
    },

    cartFunctionframe: {
        get:function() {
        	return element(by.xpath("//iframe[@class='fancybox-iframe']"));
        }
    },

    addToCartBtn: {
        get:function() {
        	return element(by.xpath("//p[@id='add_to_cart']/button"));
        }
    },

    continueShoppingBtn: {
        get:function() {
        	return element(by.xpath("//span[@title='Continue shopping']"));
        }
    },

    proceedToCheckOutBtn: {
        get:function() {
        	return element(by.xpath("//a[@title='Proceed to checkout']"));
        }
    },

    shoppingCart: {
        get:function() {
        	return element(by.xpath("//a[@title='View my shopping cart']"));
        }
    },

    cartCheckOut: {
        get:function() {
        	return element(by.xpath("//a[@id='button_order_cart']"));
        }
    },
});

module.exports = dresspage;