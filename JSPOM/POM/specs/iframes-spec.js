"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const operation_1 = require("../utils/operation");
describe('iframe', function () {
    protractor_1.browser.ignoreSynchronization = true;
    var SO;
    beforeEach(function () {
        SO = new operation_1.SomeOperation();
    });
    it('iframes', function () {
        // browser.get('https://chercher.tech/practice/frames-example-selenium-webdriver');
        // SO.switchToFrame(IFrame.frame1)
        // IFrame.topic_inputbar.sendKeys("training")
        // browser.switchTo().defaultContent()
        // element(by.xpath("//label")).getText().then(function(text){
        //     console.log(text)
        // })
        // browser.sleep(5000)
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lcy1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3NwZWNzL2lmcmFtZXMtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUdsRCxrREFBbUQ7QUFHbkQsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUVmLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLElBQUksRUFBRSxDQUFBO0lBQ04sVUFBVSxDQUFDO1FBQ1AsRUFBRSxHQUFHLElBQUkseUJBQWEsRUFBRSxDQUFBO0lBQzVCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLFNBQVMsRUFBRTtRQUNWLG1GQUFtRjtRQUVuRixrQ0FBa0M7UUFDbEMsNkNBQTZDO1FBQzdDLHNDQUFzQztRQUV0Qyw4REFBOEQ7UUFDOUQsd0JBQXdCO1FBQ3hCLEtBQUs7UUFDTCxzQkFBc0I7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9