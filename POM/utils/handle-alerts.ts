import { browser, ElementFinder } from "protractor";

export class HandleAlerts{
    public  acceptAlert(elem:ElementFinder){
        browser.sleep(4000)
        elem.click()
        browser.switchTo().alert().accept()
    }
    
    public  getTextFromAlert(){
        return browser.switchTo().alert().getText()
    }
}