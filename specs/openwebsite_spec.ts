import {browser} from 'protractor';

describe('prestashop website', function () {

    it('should open website', () => {
        browser.get('/');

        //console.log(browser.getTitle());

        browser.getTitle().then(function (text) {
            console.log('text1', text);
            for (var i = 0; i < 5; i++) {
                console.log("index", i);
                browser.getTitle().then(function (title) {
                    console.log('index: ' + i + ' | ' + title)
                });

            }
            console.log('text2', text);
        });
        expect(browser.getTitle()).toMatch('FashionShop');

    });


});
