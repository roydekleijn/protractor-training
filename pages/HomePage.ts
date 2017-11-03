import {browser, by, element} from "protractor";
import {Page} from "./Page";
import {AuthenticationPage} from "./AuthenticationPage";

export class HomePage implements Page{

    // All relevant elements
    loginLink = element(by.css('.login'));

    openPage() {
        browser.get('/')
        return this;
    }

    clickOnLogin(): AuthenticationPage {
        this.loginLink.click()
        return new AuthenticationPage;
    }


}