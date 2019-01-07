import { browser, ElementFinder, element, by } from "protractor";
import { ExpectedConditions as ec } from "protractor"

export class Dropdown{
    public actualDropdown:ElementFinder
    constructor(dropdown:ElementFinder){
        this.actualDropdown = dropdown
    }
    public selectByVisibleText(visible_text:string){
        this.actualDropdown.click()
        this.actualDropdown.element(by.xpath("//*[text()='"+visible_text+"']")).click()
    }

    public getOptions(){
        return this.actualDropdown.all(by.tagName("option"))
    }


    public getSelectedOption(){
        return browser.executeScript("return document.querySelector('select#first').value")
    }






}
