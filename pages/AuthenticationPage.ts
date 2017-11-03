import {by, element} from "protractor";
import {MyAccountPage} from "./MyAccountPage";

export class AuthenticationPage {

    emailField = element(by.css('input#email'));
    passwordField = element(by.css('input#passwd'));
    loginButton = element(by.css('button#SubmitLogin'));


    loginWith(email: string, password : string) : MyAccountPage {
        this.emailField.sendKeys(email);
        this.passwordField.sendKeys(password);
        this.loginButton.click();
        return new MyAccountPage;
    }




}