var summarypage = require('../pages/summarypage');
var summarypage = new summarypage();
var EC = protractor.ExpectedConditions;

var summaryfunction = function() {

    //proceeding with check out
    this.proceedToCheckOut = async function() {
        browser.wait(EC.visibilityOf(await summarypage.summaryTitle),20000);
        expect(await summarypage.summaryTitle.isPresent()).toBe(true);
        expect(await summarypage.summaryTitle.getText()).toContain('SUMMARY');
        //adding a sleep to allow proceed button to load.
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();",summarypage.proceedBtn.getWebElement());
        expect(await summarypage.proceedBtn.isPresent()).toBe(true);
        await summarypage.proceedBtn.click();
    };
};

module.exports = new summaryfunction();