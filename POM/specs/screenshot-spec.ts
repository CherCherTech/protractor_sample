import { browser, element, by } from "protractor";
import { SomeOperation } from "../utils/operation";
import { IFrame } from "../po/iframepo";


describe('Webelement', function() {
    browser.ignoreSynchronization = true
    it('Webelement', function() {
        let so:SomeOperation = new SomeOperation()
        browser.get('https://chercher.tech/practice/frames-example-selenium-webdriver');
        so.switchToFrame(IFrame.frame1)
        so.captureScreenShot("iframeshot")
    });  
});

