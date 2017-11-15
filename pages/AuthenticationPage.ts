import {by, element} from "protractor";

export class AuthenticationPage {

    emailField = element(by.id('email'));
    passwordField = element(by.id('passwd'));
    loginButton = element(by.id('SubmitLogin'));

    loginWith(email: string, password: string) {
        this.emailField.sendKeys(email);
        this.passwordField.sendKeys(password);
        this.loginButton.click();
    }

    getWelcomeMessage(): string {
        return '';
    }


}