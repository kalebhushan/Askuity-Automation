'use strict';

var authenticationpage = function() {
};

authenticationpage.prototype = Object.create({}, {

	authTitle: {
		get:function() {
			return element(by.xpath("//h1"));
		}
	},

    addSelectionTitle: {
		get:function() {
			return element(by.xpath("//h1[contains(text(),'Addresses')]"));
		}
	},

    shipTitle: {
		get:function() {
			return element(by.xpath("//h1[contains(text(),'Shipping')]"));
		}
	},

    regPageTitle: {
		get:function() {
			return element(by.xpath("//h1[contains(text(),'Create an account')]"));
		}
	},

    proceedBtn: {
		get:function() {
			return element(by.xpath("//a[@title='Proceed to checkout']"));
		}
	},

    createEmailInput: {
		get:function() {
			return element(by.xpath("//input[@id='email_create']"));
		}
	},

    createAccountBtn: {
		get:function() {
			return element(by.xpath("//button[@id='SubmitCreate']"));
		}
	},

    personTitle: {
		get:function() {
			return element(by.xpath("//input[@id='id_gender2']"));
		}
	},

    personFName: {
		get:function() {
			return element(by.xpath("//input[@id='customer_firstname']"));
		}
	},

    personLName: {
		get:function() {
			return element(by.xpath("//input[@id='customer_lastname']"));
		}
	},

    password: {
		get:function() {
			return element(by.xpath("//input[@id='passwd']"));
		}
	},

    dobDate: {
		get:function() {
			return element(by.xpath("//select[@id='days']"));
		}
	},

    dobMonth: {
		get:function() {
			return element(by.xpath("//select[@id='months']"));
		}
	},

    dobYear: {
		get:function() {
			return element(by.xpath("//select[@id='years']"));
		}
	},

    address1: {
		get:function() {
			return element(by.xpath("//input[@id='address1']"));
		}
	},

    city: {
		get:function() {
			return element(by.xpath("//input[@id='city']"));
		}
	},

    state: {
		get:function() {
			return element(by.xpath("//select[@id='id_state']"));
		}
	},

    postcode: {
		get:function() {
			return element(by.xpath("//input[@id='postcode']"));
		}
	},

    mPhone: {
		get:function() {
			return element(by.xpath("//input[@id='phone_mobile']"));
		}
	},

    addressAlias: {
		get:function() {
			return element(by.xpath("//input[@id='alias']"));
		}
	},

    registerBtn: {
		get:function() {
			return element(by.xpath("//button[@id='submitAccount']"));
		}
	},

    proceedToCheckoutBtn: {
		get:function() {
			return element(by.xpath("//button[@name='processAddress']"));
		}
	},

    tncCheckBox: {
		get:function() {
			return element(by.xpath("//input[@id='cgv']"));
		}
	},

    proceedOnShipBtn: {
		get:function() {
			return element(by.xpath("//button[@name='processCarrier']"));
		}
	},
});

module.exports = authenticationpage;