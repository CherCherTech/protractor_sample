import { browser, ElementFinder, element, by } from "protractor";
import { ExpectedConditions as ec } from "protractor"
import { createWriteStream } from "fs";

export class SomeOperation{
    public  clickElement(ele:ElementFinder){
        browser.wait(ec.presenceOf(ele), 30000)
        element(ele).click()
    }

    public executeJavaScript(javascript_query_to_execute){
        browser.executeScript(javascript_query_to_execute)
    }

    public switchToFrame(frame_to_switch: ElementFinder){
        browser.switchTo().frame(frame_to_switch.getWebElement())
    }

    public captureScreenShot(name_of_screenshot:string, relative_path:string="./"){
        let extension = ".png"
        browser.takeScreenshot().then(function(data){
            var str = createWriteStream(relative_path+name_of_screenshot+extension);
            str.write(new Buffer(data, "base64"))
            str.end()
        })
    }


    public someMouseops(){
        
    }

    //1.path 2.name
}



export class SomeOperation123{
    public  clickElement(){
        
        return this
    }

    public  dblClickElement(){
        
        return this
    }
}
