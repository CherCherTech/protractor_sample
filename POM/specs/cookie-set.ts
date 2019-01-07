import { browser, element, by } from "protractor";
import { SomeOperation } from "../utils/operation";
import { IFrame } from "../po/iframepo";


describe('cookie', function() {
    browser.ignoreSynchronization = true
    it('cookie', function() {
        
        browser.get('https://chercher.tech/');
        browser.manage().getCookie("trainingCookie").then(function(coo){
            console.log(coo.value)
            console.log(coo.domain)
            console.log(coo.expiry)
        })

        browser.manage().addCookie({name:"some",value:"some value"})
        browser.manage().getCookies().then(function(arrCookies){
            for(let i=0;i<arrCookies.length;i++){
                console.log(arrCookies[i].value)
                console.log(arrCookies[i].domain)
                console.log(arrCookies[i].expiry)
            }
        })
    });  
})