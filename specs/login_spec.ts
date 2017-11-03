import {browser, element, by} from 'protractor';

describe('prestashop login', function () {

    it('should be able to login', () => {
        browser.get('/');

        element(by.css('.login')).click();

        element(by.css('input#email')).sendKeys('tester@test.com');
        element(by.css('input#passwd')).sendKeys('1qazxsw2');
        element(by.css('button#SubmitLogin')).click();

        browser.getTitle().then(console.log);

        expect(element(by.css('div#center_column > p')).getText()).toMatch('Welcome to your account. Here you can manage all of your personal information and orders.');

    });

    afterAll(function() {
        element(by.css('.logout')).click();
    });

});
