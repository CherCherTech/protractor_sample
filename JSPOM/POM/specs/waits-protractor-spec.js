"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const operation_1 = require("../utils/operation");
describe('Webelement', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        protractor_1.browser.get('https://chercher.tech/practice/explicit-wait-sample-selenium-webdriver');
        //   browser.manage().timeouts().implicitlyWait(30000)
        protractor_1.element(protractor_1.by.id("checkbox")).click();
        let i = 10;
        operation_1.SomeOperation.clickElement(protractor_1.element(protractor_1.by.id("ch")));
    });
});
// Waits
/*
browser.sleep
implicit
explicit




*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdHMtcHJvdHJhY3Rvci1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3NwZWNzL3dhaXRzLXByb3RyYWN0b3Itc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUdsRCxrREFBbUQ7QUFFbkQsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ2Ysb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0VBQXdFLENBQUMsQ0FBQztRQUV4RixzREFBc0Q7UUFFcEQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFbEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gseUJBQWEsQ0FBQyxZQUFZLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUTtBQUNSOzs7Ozs7OztFQVFFIn0=