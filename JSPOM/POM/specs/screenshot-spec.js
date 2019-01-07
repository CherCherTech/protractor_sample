"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const operation_1 = require("../utils/operation");
const iframepo_1 = require("../po/iframepo");
describe('Webelement', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        let so = new operation_1.SomeOperation();
        protractor_1.browser.get('https://chercher.tech/practice/frames-example-selenium-webdriver');
        so.switchToFrame(iframepo_1.IFrame.frame1);
        so.captureScreenShot("iframeshot");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuc2hvdC1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3NwZWNzL3NjcmVlbnNob3Qtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUNsRCxrREFBbUQ7QUFDbkQsNkNBQXdDO0FBR3hDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7SUFDcEMsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUNiLElBQUksRUFBRSxHQUFpQixJQUFJLHlCQUFhLEVBQUUsQ0FBQTtRQUMxQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ2hGLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMvQixFQUFFLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9