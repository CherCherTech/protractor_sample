"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var fs = require('fs');
var csvModule = require('papaparse');
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('CSV Operations', function () {
        // set implicit time to 30 seconds
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        protractor_1.browser.get("https://google.com");
        var strSomething = fs.readFileSync("D:\\probatch1\\POM\\data-files\\csv-data.csv", 'utf8');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWstc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9zcGVjcy9leGNlay1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQThGO0FBRTlGLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFcEMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBQ2pFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDcEMsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ3BCLGtDQUFrQztRQUNsQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsOENBQThDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakcsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9