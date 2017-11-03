import {browser} from 'protractor';

describe('prestashop website', function () {

    it('should open website', () => {
        browser.get('/');

        browser.getTitle().then(console.log);
        expect(browser.getTitle()).toMatch('FashionShop');

    });


});
