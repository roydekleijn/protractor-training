import {browser, element, by} from 'protractor';

describe('prestashop login', function () {

    it('should be able to contact', () => {
        browser.get('http://demo.seleniuminaction.com/index.php?controller=contact');

        element(by.cssContainingText('select#id_contact option', 'Customer service')).click();

        element(by.css('input#email')).sendKeys('email@test.com');
        element(by.css('input#id_order')).sendKeys('order4321');
        element(by.css('textarea#message')).sendKeys('he product arrived with damages.');
        element(by.css('button#submitMessage')).click();

        browser.getTitle().then(console.log);

        expect(element(by.css('p.alert-success')).getText()).toMatch('Your message has been successfully sent to our team.');

    });

});
