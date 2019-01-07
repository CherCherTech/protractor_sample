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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vc3BlY3MvY3N2LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEY7QUFFOUYsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUVwQyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7SUFDdEMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQywyQkFBMkI7SUFDakUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNwQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFDcEIsa0NBQWtDO1FBQ2xDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyw4Q0FBOEMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNqRyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=