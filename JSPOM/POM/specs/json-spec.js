"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const json_utils_1 = require("../fileutils/json-utils");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('Mouse Operations', function () {
        // set implicit time to 30 seconds
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        protractor_1.browser.get("https://google.com");
        var ju = new json_utils_1.JsonUtils();
        var jd = ju.readJsonFile();
        console.log(jd["name"]);
        console.log(ju.readJsonFile("../../POM/data-files/json-data.json"));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3NwZWNzL2pzb24tc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4RjtBQUM5Rix3REFBb0Q7QUFFcEQsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBQ2pFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDcEMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQ3RCLGtDQUFrQztRQUNsQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFBO1FBQ3hCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUE7SUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9