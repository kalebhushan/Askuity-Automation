var authenticationpage = require('../pages/authenticationpage');
var authenticationpage = new authenticationpage();
var EC = protractor.ExpectedConditions;

var authenticationfunction = function() {

    //Creating an account with the random email and password and filling in all mandatory fields and get it to ship
    this.createAccountAndShip = async function(randomEmail, randomPassword) {
        browser.wait(EC.visibilityOf(await authenticationpage.authTitle),20000);
        expect(await authenticationpage.authTitle.isPresent()).toBe(true);
        expect(await authenticationpage.authTitle.getText()).toBe('AUTHENTICATION');
        await authenticationpage.createEmailInput.sendKeys(randomEmail);
        await authenticationpage.createAccountBtn.click();
        browser.wait(EC.visibilityOf(await authenticationpage.regPageTitle),20000);
        expect(await authenticationpage.regPageTitle.isPresent()).toBe(true);
        expect(await authenticationpage.regPageTitle.getText()).toBe('CREATE AN ACCOUNT');
        browser.sleep(1000);
        await authenticationpage.personTitle.click();
        await authenticationpage.personFName.sendKeys('FName');
        await authenticationpage.personLName.sendKeys('LName');
        await authenticationpage.password.sendKeys(randomPassword);
        await authenticationpage.dobDate.sendKeys('15');
        await authenticationpage.dobMonth.sendKeys('August');
        await authenticationpage.dobYear.sendKeys('1986');
        await authenticationpage.address1.sendKeys('123 First Ave');
        await authenticationpage.city.sendKeys('Highland Park');
        await authenticationpage.state.sendKeys('New Jersey');
        await authenticationpage.postcode.sendKeys('08904');
        await authenticationpage.mPhone.sendKeys('1234567890');
        await authenticationpage.addressAlias.clear();
        await authenticationpage.addressAlias.sendKeys('My Alma Mater');
        expect(await authenticationpage.registerBtn.isPresent()).toBe(true);
        await authenticationpage.registerBtn.click();
        //wait for the address selection page and proceed to checkout
        browser.wait(EC.visibilityOf(await authenticationpage.addSelectionTitle),20000);
        expect(await authenticationpage.addSelectionTitle.getText()).toBe('ADDRESSES');
        expect(await authenticationpage.addSelectionTitle.isPresent()).toBe(true);
        browser.executeScript("arguments[0].scrollIntoView();",await authenticationpage.proceedToCheckoutBtn.getWebElement());
        await authenticationpage.proceedToCheckoutBtn.click();
        //wait for the T&C page and proceed to checkout
        browser.wait(EC.visibilityOf(await authenticationpage.shipTitle),20000);
        expect(await authenticationpage.shipTitle.getText()).toBe('SHIPPING');
        await authenticationpage.tncCheckBox.click();
        browser.executeScript("arguments[0].scrollIntoView();",await authenticationpage.proceedOnShipBtn.getWebElement());
        await authenticationpage.proceedOnShipBtn.click();
    };
};

module.exports = new authenticationfunction()