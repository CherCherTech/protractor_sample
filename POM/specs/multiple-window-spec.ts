import { browser, element, by, ExpectedConditions } from "protractor";
import { Dropdown } from "../utils/dropdown";
import { IFrame } from "../po/iframepo";
import { SomeOperation } from "../utils/operation";


describe('windows', function() {

    browser.ignoreSynchronization = true

    fit('multiple windows', function() {
        browser.get('https://chercher.tech/protractor/handle-browser-windows-protractor');

        
        
        browser.getWindowHandle().then(function(first){
            element(by.id("three-window")).click()
            
            browser.sleep(7000)
            browser.getAllWindowHandles().then(function(twoGuid){
                console.log(twoGuid)
                let flag = false
                for(let i= 0;i<twoGuid.length;i++){
                    if(flag){
                        break
                    }
                    console.log("==>:"+twoGuid[i])
                    
                    browser.switchTo().window(twoGuid[i])
                    
                    browser.getTitle().then(function(title){
                        console.log(title)
                        if(title == "Google"){
                            element(by.name("q")).sendKeys("multiple")
                            browser.sleep(0).then(function(){
                                flag = true
                            })
                        }
                    })
                    
                }
            })
            browser.switchTo().window(first)
        })
        
        
        browser.sleep(10000)
    }); 



    it('multiple windows', function() {
        browser.get('https://chercher.tech/protractor/handle-browser-windows-protractor');

        
        browser.getWindowHandle().then(function(first){
            element(by.id("two-window")).click()
            
            browser.sleep(7000)
            browser.getAllWindowHandles().then(function(twoGuid){
                console.log(twoGuid)
                for(let i= 0;i<twoGuid.length;i++){
                    console.log("==>:"+twoGuid[i])
                    if(twoGuid[i] != first){
                        browser.switchTo().window(twoGuid[i])
                        browser.getTitle().then(function(title){
                            console.log(title)
                        })
                        element(by.name("q")).sendKeys("multiple")
                        break
                    }
                }
            })
            browser.switchTo().window(first)
        })
        
        
        browser.sleep(10000)
    });  
});


