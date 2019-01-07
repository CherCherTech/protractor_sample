import { browser, element, by } from "protractor";
import { Dropdown } from "../utils/dropdown";
import { IFrame } from "../po/iframepo";
import { SomeOperation } from "../utils/operation";


describe('iframe', function() {

    browser.ignoreSynchronization = true
    var SO
    beforeEach(function(){
        SO = new SomeOperation()
    })
    it('iframes', function() {
        // browser.get('https://chercher.tech/practice/frames-example-selenium-webdriver');

        // SO.switchToFrame(IFrame.frame1)
        // IFrame.topic_inputbar.sendKeys("training")
        // browser.switchTo().defaultContent()

        // element(by.xpath("//label")).getText().then(function(text){
        //     console.log(text)
        // })
        // browser.sleep(5000)
    });  
});


