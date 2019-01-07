import { browser, element, by } from "protractor";
import { HandleAlerts } from "../utils/handle-alerts";

// spec.js
describe('Webelement', function() {
    
    browser.ignoreSynchronization = true
    it('Webelement', function() {//3
      browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
      let ale:HandleAlerts = new HandleAlerts()
      ale.acceptAlert(element(by.name("prompt")))
      browser.sleep(4000)

    }); 
    
});


// Alerts
/*
1. alert
2. confirm
3. prompt

functions:
1. accept
2. dismiss
3. sendkeys
4. getText



*/

