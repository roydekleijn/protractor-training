import {browser, element, by, ExpectedConditions} from 'protractor';
import {SelectWrapper} from "./helpers/SelectWrapper";

describe('prestashop login', function () {

    it('should be able to login', () => {
        browser.get('/');

        let random = Math.floor((Math.random() * 999) + 1);

        element(by.css('.login')).click();

        element(by.css('input#email_create')).sendKeys(random + 'tester@test.com');
        element(by.css('button#SubmitCreate')).click();

        browser.wait(ExpectedConditions.visibilityOf(element(by.css('input#id_gender1'))), 5000);

        element(by.css('input#id_gender1')).click();
        element(by.css('input#customer_firstname')).sendKeys('firstname');
        element(by.css('input#customer_lastname')).sendKeys('lastname');
        element(by.css('input#passwd')).sendKeys(random + 'tester@test.com');

        let daysSelect = new SelectWrapper(by.id('days'));
        daysSelect.selectByValue('12');

        element(by.cssContainingText('select#months option', 'January')).click();
        element(by.cssContainingText('select#years option', '1986')).click();

        element(by.css('button#submitAccount')).click();

        browser.getTitle().then(console.log);

        expect(element(by.css('div#center_column > p')).getText()).toMatch('Your account has been created.');

    });

});



