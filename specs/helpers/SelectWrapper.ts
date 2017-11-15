import {by, element} from 'protractor';

export class SelectWrapper {
    select: any;

    constructor(select: any) {
        this.select = element(select);
    }

    getOptions() {
        return this.select.all(by.tagName('option'));
    }

    getSelectedOptions() {
        return this.select.all(by.css('option[selected="selected"]'));
    }

    selectByValue(value: string) {
        this.select.all(by.css('option[value="' + value + '"]')).click();
    }

    selectByPartialText(text: string) {
        this.select.all(by.cssContainingText('option', text)).click();
    }

    selectByText(text: string) {
        this.select.all(by.xpath('option[.="' + text + '"]')).click();
    }
}