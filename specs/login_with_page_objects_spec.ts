import {element, by} from 'protractor';
import {HomePage} from "../pages/HomePage";

describe('prestashop login', function () {

    it('should be able to login', () => {
        let myAccountPage = new HomePage()
            .openPage()
            .clickOnLogin()
            .loginWith('1','3');

            // .openPage()
            // .clickOnLogin()
            // .loginWith('tester@test.com', '1qazxsw2');

        // expect(myAccountPage.getWelcomeMessage()).toMatch('Welcome to your account. Here you can manage all of your personal information and orders.');

    });

    afterAll(function () {
        element(by.css('.logout')).click();
    });

});
