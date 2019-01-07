import { browser, element, by } from "protractor";
import { SomeOperation } from "../utils/operation";

describe('Webelement', function() {

    browser.ignoreSynchronization = true
    it('Webelement', function() {
        browser.get('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver');
      
        new SomeOperation().executeJavaScript()

        new SomeOperation().executeJavaScript("nnnn")

       
        browser.sleep(5000)
    });  
});


/*
// Timeouts





*/

