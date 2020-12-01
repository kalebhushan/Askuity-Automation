var homefunction = require('../functions/homefunction.js');
var dressfunction = require('../functions/dressfunction.js');
var summaryfunction = require('../functions/summaryfunction.js');
var authfunction = require('../functions/authenticationfunction.js');
var commonutils = require('../../testconfig/commonutils.js');

describe('Askuity Shopping Tests', function() {

  var randomEmailNum = Math.floor(Math.random() * 100) + 1900;
  var randomArrSelector = Math.floor(Math.random() * 5);
  var nameArr = ["passenger", "customer", "resident", "therapist", "traveler"];     //random array with random words
  var randomPassNum = Math.floor(Math.random() * 899) + 100;
  //combines random array with random number to make email random to avoid 'account exists' error
  var randomEmail = nameArr[randomArrSelector] + randomEmailNum + "@gmail.com";
  var randomPassword = "Passwd" + randomPassNum;

  beforeEach(function() {
	browser.ignoreSynchronization = true;
	browser.driver.manage().window().maximize();
	//load the automationpractice homepage
    browser.driver.get(commonutils.pages.homepage);
  });
  
  it('should be able to navigate to the womens summer dresses page', async function() {
    await homefunction.navigateToWomenSummerDress();
    await dressfunction.clickOnQuickView();
    await dressfunction.selectDressSize();
    await dressfunction.addToCart();
    await dressfunction.checkOut();
    await summaryfunction.proceedToCheckOut();
    await authfunction.createAccountAndShip(randomEmail, randomPassword);
  });
});