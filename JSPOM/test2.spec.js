"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// spec.js
describe('Webelement', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://google.com'); //2//5
    });
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        // element(by.xpath("//input[@title='Search']")).sendKeys("abccc")
        let abc = "qwerty";
        // expect(abc).toBeDefined()
        expect(parseInt(abc)).toBeNaN();
        expect(parseInt("12")).toBeNaN();
        protractor_1.browser.sleep(2000);
    });
    it('Webelement', function () {
    });
});
// spec.js
describe('weer', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://google.com'); //2//5
    });
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        // element(by.xpath("//input[@title='Search']")).sendKeys("abccc")
        let abc = "qwerty";
        // expect(abc).toBeDefined()
        expect(parseInt(abc)).toBeNaN();
        expect(parseInt("12")).toBeNaN();
        protractor_1.browser.sleep(2000);
    });
    it('Webelement', function () {
    });
});
// spec.js
describe('3333', function () {
    beforeEach(function () {
        protractor_1.browser.get('http://google.com'); //2//5
    });
    protractor_1.browser.ignoreSynchronization = true;
    it('Webelement', function () {
        // element(by.xpath("//input[@title='Search']")).sendKeys("abccc")
        let abc = "qwerty";
        // expect(abc).toBeDefined()
        expect(parseInt(abc)).toBeNaN();
        expect(parseInt("12")).toBeNaN();
        protractor_1.browser.sleep(2000);
    });
    it('Webelement', function () {
    });
});
//. sendkey
// get attribute
//a[i]
//   3 4 5 6 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3QyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFFbEQsVUFBVTtBQUNWLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsVUFBVSxDQUFFO1FBQ1Ysb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBLE1BQU07SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFRixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ2Ysa0VBQWtFO1FBRWxFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQTtRQUVsQiw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRS9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUU7SUFFakIsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQztBQUdILFVBQVU7QUFDVixRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ2YsVUFBVSxDQUFFO1FBQ1Ysb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBLE1BQU07SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFRixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ2Ysa0VBQWtFO1FBRWxFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQTtRQUVsQiw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRS9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUU7SUFFakIsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVU7QUFDVixRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ2YsVUFBVSxDQUFFO1FBQ1Ysb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBLE1BQU07SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFRixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ2Ysa0VBQWtFO1FBRWxFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQTtRQUVsQiw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRS9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUU7SUFFakIsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQztBQUdILFdBQVc7QUFDWCxnQkFBZ0I7QUFFaEIsTUFBTTtBQUVOLGFBQWEifQ==