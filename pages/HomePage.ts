import {browser, by, element} from "protractor";
import {AuthenticationPage} from "./AuthenticationPage";

export class HomePage {

    private loginLink = element(by.css('.login'));

    openPage() {
        browser.get('/');
        return this;
    }

    clickOnLogin() {
        this.loginLink.click();
        return new AuthenticationPage;
    }

    search(query: string) {

    }

}