"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const dropdown_1 = require("../utils/dropdown");
describe('Webelement', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        protractor_1.browser.get('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver');
        var drp = new dropdown_1.Dropdown(protractor_1.element(protractor_1.by.xpath("//select[@id='first']")));
        drp.selectByVisibleText("Yahoo");
        drp.getOptions().getText().then(function (values) {
            console.log(values);
        });
        drp.getSelectedOption().then(function (selectedValue) {
            console.log(selectedValue);
        });
        // browser.sleep(5000)
    });
});
/*
// dropdown in protractor





*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dHMtd2FpdHMtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9zcGVjcy90aW1lb3V0cy13YWl0cy1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBQ2xELGdEQUE2QztBQUU3QyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBRW5CLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFDYixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1FBRXBGLElBQUksR0FBRyxHQUFFLElBQUksbUJBQVEsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWhDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFFRixHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxhQUFhO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFLRixzQkFBc0I7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUdIOzs7Ozs7O0VBT0UifQ==