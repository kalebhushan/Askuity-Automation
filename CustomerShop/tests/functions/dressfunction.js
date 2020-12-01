var dresspage = require('../pages/dresspage');
var dresspage = new dresspage();
var EC = protractor.ExpectedConditions;

var dressfunction = function() {
    //hovers over the first listing of summer dress and click on Quick view button
    this.clickOnQuickView = async function() {
        browser.wait(EC.visibilityOf(await dresspage.summerDressTitle),20000);
        //Test if we are on the Women Summer Dresses page
        expect(await dresspage.summerDressTitle.isPresent()).toBe(true);
        expect(await dresspage.summerDressTitle.getText()).toContain('SUMMER DRESSES');
        //Adding this sleep since the page auto scrolls to the bottom for some reason.
        await browser.sleep(2000);
        //scrolling the page logo into view to prevent the page from scrolling to bottom (which is weirdly happening)
        browser.executeScript("arguments[0].scrollIntoView();",await dresspage.pageLogo.getWebElement());
        browser.actions().mouseMove(await dresspage.summerDressIcon.get(0)).perform();
        browser.wait(EC.visibilityOf(await dresspage.summerDressQuickView.get(0)),20000);
        await dresspage.summerDressQuickView.get(0).click();
        browser.wait(EC.visibilityOf(await dresspage.cartFunctionframe),20000);
        //switching to cart iframe and testing if its present.
        expect(await dresspage.cartFunctionframe.isPresent()).toBe(true);
        browser.driver.switchTo().frame(await dresspage.cartFunctionframe.getWebElement());
    };

    //Selecting dress size
    this.selectDressSize = async function() {
        browser.wait(EC.presenceOf(await dresspage.summerDressSize),20000);
        await dresspage.summerDressSize.click();
        await dresspage.summerDressSizeOption.click();
    };

    //Adding the dress to the cart
    this.addToCart = async function() {
        await dresspage.addToCartBtn.click();
        browser.wait(EC.visibilityOf(await dresspage.continueShoppingBtn),20000);
        expect(await dresspage.continueShoppingBtn.isPresent()).toBe(true);
        //usually not a good idea to check text on the button since it may change later. Can be taken out after review.
        //Same applies to the locator too.
        expect(await dresspage.continueShoppingBtn.getText()).toBe('Continue shopping');
        expect(await dresspage.proceedToCheckOutBtn.isPresent()).toBe(true);
        expect(await dresspage.proceedToCheckOutBtn.getText()).toBe('Proceed to checkout');
        browser.sleep(1000);
        await dresspage.continueShoppingBtn.click();
    };

    //Check out with one dress
    this.checkOut = async function() {
        browser.wait(EC.visibilityOf(await dresspage.shoppingCart),20000);
        browser.actions().mouseMove(await dresspage.shoppingCart).perform();
        browser.wait(EC.visibilityOf(await dresspage.cartCheckOut),20000);
        await dresspage.cartCheckOut.click();
    };
};

module.exports = new dressfunction();