import { element, by } from "protractor";

export class IFrame{
    public static INPUTBAR_topic = element(by.xpath("//*[@id='topic']/../input"))
    public static BUTTON_save = element(by.xpath("//*[@id='topic']/../input"))
    public static frame1 = element(by.id("frame1"))

}