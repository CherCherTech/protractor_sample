import { browser, element, by } from "protractor";
import { Dropdown } from "../utils/dropdown";

describe('Webelement', function() {

    browser.ignoreSynchronization = true
    it('Webelement', function() {
        browser.get('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver');

        var drp =new Dropdown(element(by.xpath("//select[@id='first']")))
        drp.selectByVisibleText("Yahoo")

        drp.getOptions().getText().then(function(values){
            console.log(values)
        })

        drp.getSelectedOption().then(function(selectedValue){
            console.log(selectedValue)
        })


        
       
        // browser.sleep(5000)
    });  
});


/*
// dropdown in protractor





*/

