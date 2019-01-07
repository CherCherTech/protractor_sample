"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const handle_alerts_1 = require("../utils/handle-alerts");
// spec.js
describe('Webelement', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        protractor_1.browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
        let ale = new handle_alerts_1.HandleAlerts();
        ale.acceptAlert(protractor_1.element(protractor_1.by.name("prompt")));
        protractor_1.browser.sleep(4000);
    });
});
// Alerts
/*
1. alert
2. confirm
3. prompt

functions:
1. accept
2. dismiss
3. sendkeys
4. getText



*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1hbGVydHMtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9zcGVjcy90ZXN0LWFsZXJ0cy1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBQ2xELDBEQUFzRDtBQUV0RCxVQUFVO0FBQ1YsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ2Ysb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUNsRixJQUFJLEdBQUcsR0FBZ0IsSUFBSSw0QkFBWSxFQUFFLENBQUE7UUFDekMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXJCLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFHSCxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7RUFhRSJ9