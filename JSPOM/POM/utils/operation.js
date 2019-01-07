"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const fs_1 = require("fs");
class SomeOperation {
    clickElement(ele) {
        protractor_1.browser.wait(protractor_2.ExpectedConditions.presenceOf(ele), 30000);
        protractor_1.element(ele).click();
    }
    executeJavaScript(javascript_query_to_execute) {
        protractor_1.browser.executeScript(javascript_query_to_execute);
    }
    switchToFrame(frame_to_switch) {
        protractor_1.browser.switchTo().frame(frame_to_switch.getWebElement());
    }
    captureScreenShot(name_of_screenshot, relative_path = "./") {
        let extension = ".png";
        protractor_1.browser.takeScreenshot().then(function (data) {
            var str = fs_1.createWriteStream(relative_path + name_of_screenshot + extension);
            str.write(new Buffer(data, "base64"));
            str.end();
        });
    }
    someMouseops() {
    }
}
exports.SomeOperation = SomeOperation;
class SomeOperation123 {
    clickElement() {
        return this;
    }
    dblClickElement() {
        return this;
    }
}
exports.SomeOperation123 = SomeOperation123;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3V0aWxzL29wZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRTtBQUNqRSwyQ0FBcUQ7QUFDckQsMkJBQXVDO0FBRXZDLE1BQWEsYUFBYTtJQUNkLFlBQVksQ0FBQyxHQUFpQjtRQUNsQyxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN2QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQywyQkFBMkI7UUFDaEQsb0JBQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRU0sYUFBYSxDQUFDLGVBQThCO1FBQy9DLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxrQkFBeUIsRUFBRSxnQkFBcUIsSUFBSTtRQUN6RSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUE7UUFDdEIsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3ZDLElBQUksR0FBRyxHQUFHLHNCQUFpQixDQUFDLGFBQWEsR0FBQyxrQkFBa0IsR0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQ3JDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdNLFlBQVk7SUFFbkIsQ0FBQztDQUdKO0FBN0JELHNDQTZCQztBQUlELE1BQWEsZ0JBQWdCO0lBQ2pCLFlBQVk7UUFFaEIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRU8sZUFBZTtRQUVuQixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7Q0FDSjtBQVZELDRDQVVDIn0=