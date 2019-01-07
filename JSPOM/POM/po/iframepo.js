"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class IFrame {
}
IFrame.INPUTBAR_topic = protractor_1.element(protractor_1.by.xpath("//*[@id='topic']/../input"));
IFrame.BUTTON_save = protractor_1.element(protractor_1.by.xpath("//*[@id='topic']/../input"));
IFrame.frame1 = protractor_1.element(protractor_1.by.id("frame1"));
exports.IFrame = IFrame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vcG8vaWZyYW1lcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFFekMsTUFBYSxNQUFNOztBQUNELHFCQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQTtBQUMvRCxrQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUE7QUFDNUQsYUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBSG5ELHdCQUtDIn0=