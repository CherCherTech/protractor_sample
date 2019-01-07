"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Dropdown {
    constructor(dropdown) {
        this.actualDropdown = dropdown;
    }
    selectByVisibleText(visible_text) {
        this.actualDropdown.click();
        this.actualDropdown.element(protractor_1.by.xpath("//*[text()='" + visible_text + "']")).click();
    }
    getOptions() {
        return this.actualDropdown.all(protractor_1.by.tagName("option"));
    }
    getSelectedOption() {
        return protractor_1.browser.executeScript("return document.querySelector('select#first').value");
    }
}
exports.Dropdown = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vdXRpbHMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUU7QUFHakUsTUFBYSxRQUFRO0lBRWpCLFlBQVksUUFBc0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUE7SUFDbEMsQ0FBQztJQUNNLG1CQUFtQixDQUFDLFlBQW1CO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDbkYsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBR00saUJBQWlCO1FBQ3BCLE9BQU8sb0JBQU8sQ0FBQyxhQUFhLENBQUMscURBQXFELENBQUMsQ0FBQTtJQUN2RixDQUFDO0NBT0o7QUF4QkQsNEJBd0JDIn0=