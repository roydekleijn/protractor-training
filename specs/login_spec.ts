import {browser, element, by} from 'protractor';

describe('prestashop login', function () {

    it('should be able to login', () => {
        browser.get('/');

        element(by.css('.login')).click();

        element(by.css('input#email')).sendKeys('tester@test.com');
        element(by.css('input#passwd')).sendKeys('1qazxsw2');

        // simple log
        console.log(browser.getTitle());

        // working example
        browser.getTitle().then(console.log);

        // function
        browser.getTitle().then(function(title) {
            console.log(title);
        });

        expect(element(by.css('div#center_column > p')).getText()).toMatch('Welcome to your account. Here you can manage all of your personal information and orders.');

    });

    // afterAll(function() {
    //     element(by.css('.logout')).click();
    // });

});
