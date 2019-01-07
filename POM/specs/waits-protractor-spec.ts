import { browser, element, by } from "protractor";
import { ExpectedConditions as ec } from "protractor"
import { HandleAlerts } from "../utils/handle-alerts";
import { SomeOperation } from "../utils/operation";

describe('Webelement', function() {
    
    browser.ignoreSynchronization = true
    it('Webelement', function() {
      browser.get('https://chercher.tech/practice/explicit-wait-sample-selenium-webdriver');

    //   browser.manage().timeouts().implicitlyWait(30000)
      
      element(by.id("checkbox")).click()

      let i = 10;
      SomeOperation.clickElement(element(by.id("ch")))
    });  
});

// Waits
/*
browser.sleep
implicit 
explicit




*/

