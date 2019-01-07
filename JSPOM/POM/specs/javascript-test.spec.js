"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const operation_1 = require("../utils/operation");
describe('Webelement', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        protractor_1.browser.get('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver');
        new operation_1.SomeOperation().executeJavaScript();
        new operation_1.SomeOperation().executeJavaScript("nnnn");
        protractor_1.browser.sleep(5000);
    });
});
/*
// Timeouts





*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YXNjcmlwdC10ZXN0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vc3BlY3MvamF2YXNjcmlwdC10ZXN0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFDbEQsa0RBQW1EO0FBRW5ELFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFFbkIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7SUFDcEMsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUNiLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7UUFFcEYsSUFBSSx5QkFBYSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUV2QyxJQUFJLHlCQUFhLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUc3QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBR0g7Ozs7Ozs7RUFPRSJ9