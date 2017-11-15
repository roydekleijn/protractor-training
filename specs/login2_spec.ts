import {browser, element, by} from 'protractor';
import {HomePage} from "../pages/HomePage";

describe('prestashop login', function () {

    it('should be able to login', () => {

        let homepage = new HomePage();
        homepage.openPage();
        homepage.clickOnLogin();

        // Bad
        browser.sleep(5000);

        // Better
        browser.manage().timeouts().implicitlyWait(3000);

        expect(element(by.css('div#center_column > p')).getText()).toMatch('Welcome to your account. Here you can manage all of your personal information and orders.');

    });

    afterAll(function () {
        element(by.css('.logout')).click();
    });

});
