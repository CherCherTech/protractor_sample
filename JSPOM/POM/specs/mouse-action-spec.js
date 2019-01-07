"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('Mouse Operations', function () {
        // set implicit time to 30 seconds
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        protractor_1.browser.get("https://google.com");
        protractor_1.browser.actions()
            .click(protractor_1.element(protractor_1.by.name("q")))
            .keyDown(protractor_1.protractor.Key.ENTER)
            .sendKeys(protractor_1.protractor.Key.ARROW_DOWN)
            .keyUp(protractor_1.protractor.Key.SHIFT)
            .perform();
        protractor_1.browser.sleep(10000);
    });
});
/*

{
    "name":"karthiq",
    "password":"testpwd"
}

*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2UtYWN0aW9uLXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vc3BlY3MvbW91c2UtYWN0aW9uLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEY7QUFDOUYsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBQ2pFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDcEMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQ3RCLGtDQUFrQztRQUNsQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLG9CQUFPLENBQUMsT0FBTyxFQUFFO2FBQ1osS0FBSyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzVCLE9BQU8sQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzthQUNuQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ1QsT0FBTyxFQUFFLENBQUE7UUFDMUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUdIOzs7Ozs7O0VBT0UifQ==