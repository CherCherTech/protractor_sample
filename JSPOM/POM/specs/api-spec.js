"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var req = require("request");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('API Operations', function (done) {
        req.delete({
            "headers": { "content-type": "application/json" },
            "url": "https://chercher.tech/sample/api/product/delete",
        }, (error, response, body) => {
            console.log(response.statusCode);
            console.log(body);
            done();
        });
    });
    it('API Operations', function (done) {
        req.get({
            "headers": { "content-type": "application/json" },
            "url": "https://chercher.tech/sample/api/product/create"
        }, (error, response, body) => {
            console.log(response.statusCode);
            console.log(body);
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vc3BlY3MvYXBpLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUM7QUFDbkMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRTVCLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUN0QyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUNqRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLElBQUk7UUFDNUIsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNQLFNBQVMsRUFBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztZQUM5QyxLQUFLLEVBQUMsaURBQWlEO1NBRTFELEVBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxFQUFFO1lBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsSUFBSSxFQUFFLENBQUE7UUFFUCxDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUMsQ0FBQyxDQUFDO0lBU0gsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVMsSUFBSTtRQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ0osU0FBUyxFQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDO1lBQzlDLEtBQUssRUFBQyxpREFBaUQ7U0FDMUQsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLEVBQUU7WUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLEVBQUUsQ0FBQTtRQUVQLENBQUMsQ0FBQyxDQUFBO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFHUixDQUFDLENBQUMsQ0FBQyJ9