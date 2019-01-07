"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('windows', function () {
    protractor_1.browser.ignoreSynchronization = true;
    fit('multiple windows', function () {
        protractor_1.browser.get('https://chercher.tech/protractor/handle-browser-windows-protractor');
        protractor_1.browser.getWindowHandle().then(function (first) {
            protractor_1.element(protractor_1.by.id("three-window")).click();
            protractor_1.browser.sleep(7000);
            protractor_1.browser.getAllWindowHandles().then(function (twoGuid) {
                console.log(twoGuid);
                let flag = false;
                for (let i = 0; i < twoGuid.length; i++) {
                    if (flag) {
                        break;
                    }
                    console.log("==>:" + twoGuid[i]);
                    protractor_1.browser.switchTo().window(twoGuid[i]);
                    protractor_1.browser.getTitle().then(function (title) {
                        console.log(title);
                        if (title == "Google") {
                            protractor_1.element(protractor_1.by.name("q")).sendKeys("multiple");
                            protractor_1.browser.sleep(0).then(function () {
                                flag = true;
                            });
                        }
                    });
                }
            });
            protractor_1.browser.switchTo().window(first);
        });
        protractor_1.browser.sleep(10000);
    });
    it('multiple windows', function () {
        protractor_1.browser.get('https://chercher.tech/protractor/handle-browser-windows-protractor');
        protractor_1.browser.getWindowHandle().then(function (first) {
            protractor_1.element(protractor_1.by.id("two-window")).click();
            protractor_1.browser.sleep(7000);
            protractor_1.browser.getAllWindowHandles().then(function (twoGuid) {
                console.log(twoGuid);
                for (let i = 0; i < twoGuid.length; i++) {
                    console.log("==>:" + twoGuid[i]);
                    if (twoGuid[i] != first) {
                        protractor_1.browser.switchTo().window(twoGuid[i]);
                        protractor_1.browser.getTitle().then(function (title) {
                            console.log(title);
                        });
                        protractor_1.element(protractor_1.by.name("q")).sendKeys("multiple");
                        break;
                    }
                }
            });
            protractor_1.browser.switchTo().window(first);
        });
        protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtd2luZG93LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vc3BlY3MvbXVsdGlwbGUtd2luZG93LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0U7QUFNdEUsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUVwQyxHQUFHLENBQUMsa0JBQWtCLEVBQUU7UUFDcEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUlsRixvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDekMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFdEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLE9BQU87Z0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3BCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQTtnQkFDaEIsS0FBSSxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7b0JBQzlCLElBQUcsSUFBSSxFQUFDO3dCQUNKLE1BQUs7cUJBQ1I7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBRTlCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUVyQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7d0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQ2xCLElBQUcsS0FBSyxJQUFJLFFBQVEsRUFBQzs0QkFDakIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzRCQUMxQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2xCLElBQUksR0FBRyxJQUFJLENBQUE7NEJBQ2YsQ0FBQyxDQUFDLENBQUE7eUJBQ0w7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7aUJBRUw7WUFDTCxDQUFDLENBQUMsQ0FBQTtZQUNGLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO1FBR0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFJSCxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDbkIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUdsRixvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDekMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFcEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkIsb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLE9BQU87Z0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3BCLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDOUIsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFDO3dCQUNuQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDckMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLOzRCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUN0QixDQUFDLENBQUMsQ0FBQTt3QkFDRixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7d0JBQzFDLE1BQUs7cUJBQ1I7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQTtZQUNGLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO1FBR0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9