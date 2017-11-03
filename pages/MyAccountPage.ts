import {by, element} from "protractor";

export class MyAccountPage {

    // All relevant elements
    welcomeMessage = element(by.css('div#center_column > p'));

    getWelcomeMessage() {
        return this.welcomeMessage.getText();
    }
}