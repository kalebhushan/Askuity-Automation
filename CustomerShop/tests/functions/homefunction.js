var homepage = require('../pages/homepage');
var homepage = new homepage();
var EC = protractor.ExpectedConditions;

var homefunction = function() {
    //Hovers over the Women Menu option and clicks on Summer Dress suboption
    this.navigateToWomenSummerDress = async function() {
        expect(await homepage.womenMenu.isPresent()).toBe(true);
        browser.actions().mouseMove(await homepage.womenMenu).perform();
        browser.wait(EC.visibilityOf(await homepage.womenSummerDress),20000);
        await homepage.womenSummerDress.click();
    };
};

module.exports = new homefunction();